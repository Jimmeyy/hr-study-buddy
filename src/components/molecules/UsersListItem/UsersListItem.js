import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { UserShape } from 'types';

const UsersListItem = ({
    deleteUser,
    userData: { name, average, attendance = '0%' },
}) => {
    return (
        <Wrapper>
            <Average average={average} />
            <StyledInfo>
                <p>{name}</p>
                <p>attendance: {attendance}%</p>
            </StyledInfo>
            <DeleteButton onClick={() => deleteUser(name)} />
        </Wrapper>
    );
};

UsersListItem.propTypes = {
    deleteUser: PropTypes.func,
    userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
