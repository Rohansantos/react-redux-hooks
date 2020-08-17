import { createStore } from "redux";
const { v4: uuidv4 } = require('uuid');

const initialState = {
        todos: [
        {
            id: uuidv4(),
            name: 'Go to the gym',
            complete: false
        },
        {
            id: uuidv4(),
            name: 'Do laundry',
            complete: true
        }
    ]
};
export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);
function reducer(state, {type, payload}) {
    switch(type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        case 'TOGGLE_TODO':
            return {
                ...state, 
                // find the todo that has the same id as we're pass in the payload and change the complete of that todo
                todos: state.todos.map(todo => (todo.id === payload) ? {...todo, complete: !todo.complete} : todo )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                // the todo id must return all the diferents id and payloads. if its equal
                todos: state.todos.filter(todo => todo.id !== payload)
            };
        default:
            return state;        
    };
}

export const addTodoAction = (todo) =>({
    type: 'ADD_TODO',
    payload: todo
});

export const toggleTodoAction = todoId => ({
    type: 'TOGGLE_TODO',
    payload: todoId
});

export const deleteTodoAction = todoId => ({
    type: 'DELETE_TODO',
    payload: todoId
});
