export const ADD_TODO = 'ADD_TODO';

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: {
            title,
            id: Math.random().toString(36).substr(2, 9) 
        }
    };
};