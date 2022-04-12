import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {
    StyledFieldsContainer,
    StyledPropertiesContainer,
    StyledAddProperties
} from 'components/CreateItemPage/AddProperties/styled';

const initialState = {
    name: '',
    type: ''
};

const CreateFormFields = ({ form, field }) => {
    const [{ name, type }, setState] = useState(initialState);

    const { value: fieldValue = [] } = field.input;

    const handleAdd = () => {
        form.change(field.input.name, [...fieldValue, { name, type }]);
        setState(initialState);
    };
    const handleRemove = index => {
        form.change(
            field.input.name,
            fieldValue.filter((value, i) => index !== i)
        );
    };

    return (
        <StyledAddProperties>
            <StyledFieldsContainer>
                <TextField
                    label="Type"
                    placeholder="Character"
                    value={type}
                    onChange={e => setState(state => ({ ...state, type: e.target.value }))}
                />
                <TextField
                    label="Name"
                    placeholder="Male"
                    value={name}
                    onChange={e => setState(state => ({ ...state, name: e.target.value }))}
                />
                <Button variant="outlined" color="primary" onClick={handleAdd}>
                    +
                </Button>
            </StyledFieldsContainer>
            <StyledPropertiesContainer>
                {fieldValue.map((value, i) => (
                    <StyledFieldsContainer key={i}>
                        <TextField disabled value={value.type} />
                        <TextField disabled value={value.name} />
                        <Button variant="outlined" color="error" onClick={() => handleRemove(i)}>
                            -
                        </Button>
                    </StyledFieldsContainer>
                ))}
            </StyledPropertiesContainer>
        </StyledAddProperties>
    );
};

CreateFormFields.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
};

export default CreateFormFields;
