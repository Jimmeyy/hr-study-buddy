import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from 'views/Dashboard';

describe('AddUser View', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        const name = screen.queryByTestId('Name');
        const attendace = screen.queryByTestId('Attendance');
        const average = screen.queryByTestId('Average');
        const submit = screen.queryByText('Add');

        fireEvent.change(name, { target: { value: 'Damian' } });
        fireEvent.change(attendace, { target: { value: '55%' } });
        fireEvent.change(average, { target: { value: '4.5' } });
        fireEvent.click(submit);

        screen.queryByText('Damian');
    });
});
