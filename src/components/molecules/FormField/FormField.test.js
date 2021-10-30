import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import FormField from './FormField';

describe('FormField Component', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <FormField
                label="name"
                name="name"
                id="name"
                value="name"
                onChange={() => {}}
            />
        );
    });

    it('Temp test for formField', () => {
        renderWithProviders(
            <FormField
                label="name"
                name="name"
                id="name"
                value="name"
                onChange={() => {}}
            />
        );

        screen.getByTestId('name');
    });
});
