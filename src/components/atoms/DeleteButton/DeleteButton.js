import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './DeleteButton.style';

const Button = (props) => (
    <StyledButton {...props}>
        <DeleteIcon />
    </StyledButton>
);

export default Button;
