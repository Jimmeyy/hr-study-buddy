import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    ${Label} {
        margin-bottom: 6px;
    }
`;

const FormField = ({
    value,
    onChange,
    label,
    name,
    id,
    type = 'text',
    ...props
}) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                data-testid={label}
            />
        </Wrapper>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default FormField;
