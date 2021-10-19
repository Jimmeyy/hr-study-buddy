import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => (
    <Wrapper>
        <Average average={average} />
        <StyledInfo>
            <p>{name}</p>
            <p>attendance: {attendance}%</p>
        </StyledInfo>
        <Button />
    </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        average: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;
