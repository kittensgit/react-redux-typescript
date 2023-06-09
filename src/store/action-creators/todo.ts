import { Dispatch } from "redux"
import axios from "axios"
import { TodoAction, TodoActionsType } from "../../types/todo"


export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionsType.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            dispatch({ type: TodoActionsType.FETCH_TODOS_SUCCESS, payload: response.data })
        }
        catch (e) {
            dispatch({ type: TodoActionsType.FETCH_TODOS_ERROR, payload: 'ERROR' })
        }
    }
}

export function SetTodoPageAction(page: number): TodoAction {
    return {
        type: TodoActionsType.SET_TODO_PAGE,
        payload: page
    }
}