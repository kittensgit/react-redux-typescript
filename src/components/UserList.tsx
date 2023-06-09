import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import type { } from 'redux-thunk/extend-redux';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.user)

    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error 404</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>
                {user.name}
            </div>
            )}
        </div>

    )
}

export default UserList;