import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {
    StyledFieldsContainer,
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
            <div>
                {fieldValue.map((value, i) => (
                    <div key={i}>
                        {value.type} - {value.name}
                    </div>
                ))}
            </div>
        </StyledAddProperties>
    );
};

CreateFormFields.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
};

export default CreateFormFields;
