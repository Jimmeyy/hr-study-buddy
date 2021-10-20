// THIS FILE IS NOT USED, IT IS ONLY FOR LEARNING PURPOSES

import React, { Component } from 'react';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styled';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([...users]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};
class UsersList extends Component {
    state = {
        users: [],
        isLoading: true,
    };

    componentDidMount() {
        mockAPI(true)
            .then((data) => {
                this.setState({
                    users: data,
                    isLoading: false,
                });
            })
            .catch((err) => console.log(err));
    }

    deleteUser = (name) => {
        const filteredusers = this.state.users.filter(
            (user) => user.name !== name
        );
        this.setState({ users: filteredusers });
    };

    render() {
        const { users } = this.state;

        return (
            <Wrapper>
                {this.state.isLoading ? 'Loading...' : 'Users List'}
                <StyledList>
                    {users.map((userData, index) => (
                        <UsersListItem
                            key={index}
                            userData={userData}
                            deleteUser={this.deleteUser}
                        />
                    ))}
                </StyledList>
            </Wrapper>
        );
    }
}

export default UsersList;
