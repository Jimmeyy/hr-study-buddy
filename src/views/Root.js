import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <UsersProvider>
                        <Wrapper>
                            <Switch>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                                <Route path="/add-user">
                                    <AddUser />
                                </Route>
                            </Switch>
                        </Wrapper>
                    </UsersProvider>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
