import { TodoAction, TodoActionsType, TodoState } from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    error: null,
    limit: 10,
    loading: false,
    page: 1
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionsType.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionsType.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionsType.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionsType.SET_TODO_PAGE:
            return  {...state, loading: false, page: action.payload}
        default:
            return state
    }
}