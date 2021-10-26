import React, { useState, useEffect } from 'react';
import { mockAPI } from 'helpers';

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
    usersLoading: true,
});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [usersLoading, setusersLoading] = useState(true);

    useEffect(() => {
        mockAPI(true)
            .then((data) => {
                setUsers(data);
                setusersLoading(!usersLoading);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteUser = (name) => {
        const filteredusers = users.filter((user) => user.name !== name);
        setUsers(filteredusers);
    };

    const handleAddUser = (user) => {
        const { name, attendance, average } = user;
        const newUser = {
            name,
            attendance,
            average,
        };

        setUsers([newUser, ...users]);
    };

    return (
        <UsersContext.Provider
            value={{
                users,
                handleAddUser,
                deleteUser,
                usersLoading,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
