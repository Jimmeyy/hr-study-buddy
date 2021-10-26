import React from 'react';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = ({ users, deleteUser, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <StyledTitle>Loading...</StyledTitle>
            ) : (
                <StyledTitle>Users list:</StyledTitle>
            )}
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem
                        key={index}
                        userData={userData}
                        deleteUser={deleteUser}
                    />
                ))}
            </StyledList>
        </>
    );
};

export default UsersList;
