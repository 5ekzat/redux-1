import React, { useState } from 'react';

const TodoReact = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const inp = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        const formData = e.target;
        let todoTitle = formData.title.value.trim()
        if(todoTitle.length > 0){
            let newTodoImp = { title: todoTitle, id: Math.random() }; 
            setTodos([...todos, newTodoImp]);
            formData.reset()
            setNewTodo(''); 
        }
    }
    
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name='title' value={newTodo} onChange={inp}/>
                <input type="submit" />
            </form>
            
            <ul>
                {todos.map(el =>
                    <li key={el.id}>{el.title}</li>
                )}
            </ul>
        </div>
    );
}

export default TodoReact;
