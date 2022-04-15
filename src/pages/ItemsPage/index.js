import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Page from 'components/shared/Page';
import ItemsPageComponent from 'components/ItemsPage';

import { nftActions } from 'store/actions';

const ItemsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftActions.search(null));
    }, []);

    return (
        <Page>
            <ItemsPageComponent />
        </Page>
    );
};

export default ItemsPage;
