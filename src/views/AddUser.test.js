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
        const name = screen.getByTestId('Name');
        const attendace = screen.getByTestId('Attendance');
        const average = screen.getByTestId('Average');
        const submit = screen.getByText('Add');

        fireEvent.change(name, { target: { value: 'Damian' } });
        fireEvent.change(attendace, { target: { value: '55%' } });
        fireEvent.change(average, { target: { value: '4.5' } });
        fireEvent.click(submit);

        screen.getByText('Damian');
    });
});
