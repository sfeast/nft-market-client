import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Page from 'components/shared/Page';
import CreateItemPageComponent from 'components/CreateItemPage';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const CreateItemPage = () => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    useEffect(() => {
        if (!key) {
            toast.warning('Please, connect you wallet.');
            dispatch(walletActions.connectionRequest());
        }
    }, [dispatch, key]);

    return (
        <Page>
            <CreateItemPageComponent />
        </Page>
    );
};

export default CreateItemPage;
