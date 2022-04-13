import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Page from 'components/shared/Page';
import CreateItemPageComponent from 'components/CreateItemPage';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';
import { notifications } from 'utils/helpers/notifications';

const CreateItemPage = () => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    useEffect(() => {
        if (!key) {
            const message = notifications.connectWallet;
            toast.warning(message, { toastId: message });
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
