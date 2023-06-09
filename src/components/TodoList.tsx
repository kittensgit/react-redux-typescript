import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

export const TodoList: React.FC = () => {

    const { todos, page, loading, error, limit } = useTypedSelector(state => state.todo)
    const { fetchTodo, SetTodoPageAction } = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page])


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
            <div style={{ display: 'flex' }}>
                {pages.map(p => <div
                    onClick={() => { SetTodoPageAction(p) }}
                    style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: '10px' }}
                    key={p}
                >
                    {p}
                </div>)}
            </div>
        </div>
    )
}
