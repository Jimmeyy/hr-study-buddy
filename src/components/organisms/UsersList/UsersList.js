import React, { useContext } from 'react';
import { StyledList, StyledTitle } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
    const { users, usersLoading } = useContext(UsersContext);

    return (
        <>
            {usersLoading ? (
                <StyledTitle>Loading...</StyledTitle>
            ) : (
                <StyledTitle>Users list:</StyledTitle>
            )}
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem key={index} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default UsersList;
