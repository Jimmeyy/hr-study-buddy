import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

const UsersListItem = ({
    index,
    userData: { name, average, attendance = '0%' },
}) => {
    const showIndex = (index) => alert(`This is student #${index + 1}`);

    return (
        <Wrapper>
            <Average average={average} />
            <StyledInfo>
                <p>{name}</p>
                <p>attendance: {attendance}%</p>
            </StyledInfo>
            <Button onClick={() => showIndex(index)} />
        </Wrapper>
    );
};

UsersListItem.propTypes = {
    index: PropTypes.number,
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        average: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;
