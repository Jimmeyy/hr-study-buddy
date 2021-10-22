import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { mockAPI, useDidMountEffect } from 'helpers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const Root = () => {
    const [formValues, setFormValues] = useState(initialFormState);
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

    useDidMountEffect(() => {
        console.log('isLoading state has changed.');
    }, [isLoading]);

    const deleteUser = (name) => {
        const filteredusers = users.filter((user) => user.name !== name);
        setUsers(filteredusers);
    };

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleAddUser = (event) => {
        event.preventDefault();
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };

        setUsers([newUser, ...users]);
        setFormValues(initialFormState);
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Wrapper>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/add-user">Add-user</Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact>
                            <UsersList
                                users={users}
                                isLoading={isLoading}
                                deleteUser={deleteUser}
                            />
                        </Route>
                        <Route path="/add-user">
                            <Form
                                handleInputChange={handleInputChange}
                                formValues={formValues}
                                handleAddUser={handleAddUser}
                            />
                        </Route>
                    </Switch>
                </Wrapper>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
