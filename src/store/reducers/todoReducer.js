import { ADD_TODO } from '../../actions/todoAction';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default todoReducer;
