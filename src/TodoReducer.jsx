    import React, { useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { addTodo } from './actions/todoAction';

    const TodoRedux = () => {
        const [newTodo, setNewTodo] = useState('');
        const dispatch = useDispatch();
        const todos = useSelector(state => state.todo.todos);

        const inp = (e) => {
            setNewTodo(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (newTodo.trim() !== '') {
                dispatch(addTodo(newTodo));
                setNewTodo('');
            }
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={newTodo} onChange={inp} />
                    <input type="submit" />
                </form>

                <ul>
                    {todos.map(todo =>
                        <li key={todo.id}>{todo.title}</li>
                    )}
                </ul>
            </div>
        );
    }

    export default TodoRedux;
