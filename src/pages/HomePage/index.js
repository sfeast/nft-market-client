import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Page from 'components/shared/Page';
import HomePageComponent from 'components/HomePage';
import { nftActions } from 'store/actions';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftActions.getSliceResults(12));
    }, [dispatch]);

    return (
        <Page>
            <HomePageComponent />
        </Page>
    );
};

export default HomePage;
