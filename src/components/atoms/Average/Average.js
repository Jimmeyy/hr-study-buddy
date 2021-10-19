import React from 'react';
import { StyledAverage } from './Average.styled';

const Average = ({ average }) => {
    const setColor = (average) => {
        if (average < 3) {
            return 'red';
        } else if (average >= 3 && average < 4) {
            return 'orange';
        }

        return 'green';
    };

    return <StyledAverage bgColor={setColor(average)}>{average}</StyledAverage>;
};

export default Average;
