import React, { useContext, useReducer, useEffect, useRef } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
};

const reducerFormValues = (state, action) => {
    switch (action.type) {
        case 'INPUT CHANGE':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'CHECKBOX CHANGE':
            return {
                ...state,
                consent: !state.consent,
            };
        case 'THROW ERROR':
            return {
                ...state,
                error: action.errorMsg,
            };
        case 'CLEAR VALUES':
            return initialFormState;
        default:
            return state;
    }
};

const AddUser = () => {
    // const [formValues, setFormValues] = useState(initialFormState);
    const [formValues, dispatchFormValues] = useReducer(
        reducerFormValues,
        initialFormState
    );
    const { handleAddUser } = useContext(UsersContext);
    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    const handleInputChange = (event) => {
        dispatchFormValues({
            type: 'INPUT CHANGE',
            field: event.target.name,
            value: event.target.value,
        });
    };

    const handleCheckboxChange = (event) => {
        dispatchFormValues({
            type: 'CHECKBOX CHANGE',
        });
    };

    const handleSubmitUser = (event) => {
        event.preventDefault();

        if (formValues.consent) {
            handleAddUser(formValues);
            dispatchFormValues({
                type: 'CLEAR VALUES',
            });
        } else {
            dispatchFormValues({
                type: 'THROW ERROR',
                errorMsg: 'You need to check checkbox to send the from',
            });
        }
    };

    return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            <Title>Add new student</Title>
            <FormField
                label="Name"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                ref={nameInputRef}
            />
            <FormField
                label="Attendance"
                id="attendance"
                name="attendance"
                value={formValues.attendance}
                onChange={handleInputChange}
            />
            <FormField
                label="Average"
                id="average"
                name="average"
                value={formValues.average}
                onChange={handleInputChange}
            />
            <FormField
                label="Consent"
                id="consent"
                name="consent"
                value={formValues.consent}
                onChange={handleCheckboxChange}
                type="checkbox"
            />
            <Button type="submit">Add</Button>
            {formValues.error && <p>{formValues.error}</p>}
        </ViewWrapper>
    );
};

export default AddUser;
