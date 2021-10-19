import styled from 'styled-components';

export const StyledAverage = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    background-color: ${({ theme, bgColor }) => {
        if (bgColor === 'red') return theme.colors.error;
        if (bgColor === 'orange') return theme.colors.warning;
        if (bgColor === 'green') return theme.colors.success;
    }};
`;
