import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
    <div>
        <ul>
            {users.map((userData, index) => (
                <UsersListItem key={index} userData={userData} />
            ))}
        </ul>
    </div>
);

export default UsersList;
