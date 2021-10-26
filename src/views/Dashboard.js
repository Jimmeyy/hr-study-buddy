import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';

const Dashboard = ({ users, isLoading, deleteUser }) => {
    return (
        <ViewWrapper>
            <UsersList
                users={users}
                isLoading={isLoading}
                deleteUser={deleteUser}
            />
        </ViewWrapper>
    );
};

Dashboard.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    isLoading: PropTypes.bool,
    deleteUser: PropTypes.func,
};

export default Dashboard;
