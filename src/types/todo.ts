export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsType {
    FETCH_TODOS = 'FETCH_TODOS', 
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS', 
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR', 
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoAction {
    type: TodoActionsType.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodoActionsType.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorAction {
    type: TodoActionsType.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPageAction {
    type: TodoActionsType.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction