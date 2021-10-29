import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import FormField from './FormField';

describe('FormField Component', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <FormField label="name" name="name" id="name" value="name" />
        );
    });
});
