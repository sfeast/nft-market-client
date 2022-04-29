import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';

import Typography from '@mui/material/Typography';

import CreateFormFields from 'components/CreateItemPage/CreateFormFields';
import Divider from 'components/shared/Divider';
import { StyledCreateItemPage } from 'components/CreateItemPage/styled';

import { marketActions } from 'store/actions';

const initialValues = {
    image: '',
    name: '',
    description: '',
    externalLink: '',
    properties: []
};

const CreateItemPage = props => {
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        metaData => {
            dispatch(marketActions.mint(metaData));
        },
        [dispatch]
    );

    return (
        <StyledCreateItemPage>
            <Divider position="left">
                <Typography variant="h4" fontWeight="bold">
                    Create Item
                </Typography>
            </Divider>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={formProps => <CreateFormFields {...props} {...formProps} />}
            />
        </StyledCreateItemPage>
    );
};

export default CreateItemPage;
