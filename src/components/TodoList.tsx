import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

export const TodoList: React.FC = () => {

    const { todos, page, loading, error, limit } = useTypedSelector(state => state.todo)
    const { fetchTodo, SetTodoPageAction } = useActions()

    useEffect(() => {
        fetchTodo(page, limit)
    }, [])


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error 404</h1>
    }
    return (
        <div>
            {todos.map(todo => <div key={todo.id}>
                {todo.id} - {todo.title}
            </div>)}
        </div>
    )
}
