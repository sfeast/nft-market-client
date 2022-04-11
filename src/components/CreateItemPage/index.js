import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-final-form';

import Typography from '@mui/material/Typography';

import CreateFormFields from 'components/CreateItemPage/CreateFormFields';
import Divider from 'components/shared/Divider';
import { StyledCreateItemPage } from 'components/CreateItemPage/styled';

import { marketActions, walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const initialValues = {
    image: '',
    name: '',
    description: '',
    externalLink: '',
    properties: []
};

const CreateItemPage = props => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    const onSubmit = useCallback(
        metaData => {
            if (!key) {
                alert('Please connect Casper Signer');
                dispatch(walletActions.connectionRequest());
            } else {
                dispatch(marketActions.mint(metaData));
            }
        },
        [dispatch, key]
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
