import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useField, useForm } from 'react-final-form';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from 'components/shared/Divider';
import Dropzone from 'components/shared/Dropzone';
import AddProperties from 'components/CreateItemPage/AddProperties';
import RequiredFieldLabel from 'components/shared/RequiredFieldLabel';
import {
    StyledTextField,
    StyledContent,
    StyledFieldsContainer,
    StyledCreateFormFields
} from 'components/CreateItemPage/CreateFormFields/styled';

import { getFieldError, validators } from 'utils/helpers/form';
import { getBytes } from 'utils/helpers/calculations';
import { useIpfsContext } from 'context/ipfs';
import { marketSelectors } from 'store/selectors';
import { ACCEPTED_MIME_TYPES, DEPLOY_STATE } from 'constants/config';

const ACCEPTED_MIME_TYPES_ARRAY = Object.values(ACCEPTED_MIME_TYPES);

const CreateFormFields = ({ handleSubmit }) => {
    const form = useForm();
    const ipfs = useIpfsContext();
    const deployState = useSelector(marketSelectors.selectDeployState);

    // fields
    const imageField = useField('image', { validate: validators.required });
    const descriptionField = useField('description');
    const nameField = useField('name', {
        validate: validators.required
    });
    const externalLinkField = useField('externalLink', {
        validate: validators.https
    });
    const propertiesField = useField('properties', { multiple: true });

    // errors
    const externalLinkFieldError = getFieldError(externalLinkField);
    const nameFieldError = getFieldError(nameField);
    const imageFieldError = getFieldError(imageField);

    // handlers
    const handleChangeImage = useCallback(
        fileUrls => {
            form.change('image', fileUrls[0]);
        },
        [form]
    );
    const handleRemoveImage = useCallback(() => {
        form.change('image', '');
    }, [form]);

    const submitButtonIsDisabled =
        deployState === DEPLOY_STATE.MINT ||
        !ipfs ||
        !nameField.input.value ||
        !imageField.input.value ||
        !!externalLinkFieldError ||
        !!nameFieldError ||
        !!imageFieldError;

    const getButtonTitle = () => {
        switch (true) {
            case !ipfs: {
                return 'Please, wait..';
            }
            case deployState === DEPLOY_STATE.MINT: {
                return 'Your NFT item is minting. Please wait..';
            }
            default: {
                return 'Create';
            }
        }
    };

    return (
        <StyledCreateFormFields>
            <StyledContent>
                <Dropzone
                    dropzoneOptions={{
                        accept: ACCEPTED_MIME_TYPES_ARRAY,
                        maxFiles: 1,
                        maxSize: getBytes(2, 'mb'),
                        multiple: false
                    }}
                    hintMessage="We support JPG, PNG, GIF"
                    width="400px"
                    onChange={handleChangeImage}
                    onRemove={handleRemoveImage}
                />
                <StyledFieldsContainer>
                    <StyledTextField
                        {...nameField.input}
                        label={<RequiredFieldLabel>Name</RequiredFieldLabel>}
                        error={!!nameFieldError}
                    />
                    <StyledTextField
                        {...externalLinkField.input}
                        label="External link"
                        error={!!externalLinkFieldError}
                        placeholder="https://mysite.com/to/details"
                    />
                    <StyledTextField
                        {...descriptionField.input}
                        multiline
                        maxRows={10}
                        label="Description"
                    />
                </StyledFieldsContainer>
            </StyledContent>
            <Divider>
                <Typography variant="subtitle1">Add properties</Typography>
            </Divider>
            <AddProperties field={propertiesField} form={form} />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={submitButtonIsDisabled}
            >
                {getButtonTitle()}
            </Button>
        </StyledCreateFormFields>
    );
};

CreateFormFields.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default CreateFormFields;
