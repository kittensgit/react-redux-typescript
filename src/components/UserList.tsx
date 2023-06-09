import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';
import type { } from 'redux-thunk/extend-redux';

const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
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