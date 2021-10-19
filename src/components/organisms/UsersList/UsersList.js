import React from 'react';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styled';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (
    <Wrapper>
        <StyledList>
            {users.map((userData, index) => (
                <UsersListItem key={index} userData={userData} />
            ))}
        </StyledList>
    </Wrapper>
);

export default UsersList;
