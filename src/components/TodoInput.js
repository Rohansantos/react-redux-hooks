import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../redux';
const { v4: uuidv4 } = require('uuid');



export default () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch()

    const addTodo = (todo) => dispatch(addTodoAction(todo))

    const onChange = event => {
        setTodo(event.target.value);
    }
    const onSubmit = event => {
        event.preventDefault();
        if(todo.trim() === '') return;        
    
        addTodo({
            id: uuidv4(),
            name: todo,
            complete: false
        })

        setTodo('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-div"> 
                <input type="text"
                    name="todo"
                    placeholder="Add a todo"
                    value={todo}
                    onChange={onChange}
                    />
                    <button type="submit">Add todo</button>      
            </div>
        </form>
    )
};
