import React, { useState, useEffect, useRef } from 'react';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styled';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([...usersData]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};

// Custom hook, same as useEffect but without first render
const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
};

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        mockAPI(true)
            .then((data) => {
                setUsers(data);
                setIsLoading(!isLoading);
            })
            .catch((err) => console.log(err));
    }, []);

    // useEffect(() => {
    //     console.log('isLoading state has changed.');
    // }, [isLoading]);

    useDidMountEffect(() => {
        console.log('isLoading state has changed.');
    }, [isLoading]);

    const deleteUser = (name) => {
        const filteredusers = users.filter((user) => user.name !== name);
        setUsers(filteredusers);
    };

    return (
        <Wrapper>
            {isLoading ? 'Loading...' : 'Users List'}
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem
                        key={index}
                        userData={userData}
                        deleteUser={deleteUser}
                    />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;
