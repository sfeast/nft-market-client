import { useDispatch, useSelector } from 'react-redux';

import { marketActions } from 'store/actions';
import { marketSelectors, walletSelectors } from 'store/selectors';

import { StyledButton } from 'components/CreatePage/styled';

const CreatePage = () => {
    const dispatch = useDispatch();
    const connected = useSelector(walletSelectors.selectConnected);

    // TODO: replace this with a form/user input fields to create these values - see https://www.friendly.market/nfts/create for example
    const metaData = {
        image: 'image',
        // optional user defined properties
        properties: {
            prop1: 'prop 1 value',
            prop2: 'prop 2 value'
        },
        description: 'description'
    };

    const mint = async e => {
        if (!connected) {
            alert('Please connect Casper Signer');
        }
        dispatch(marketActions.mint(metaData));
    };

    return <StyledButton onClick={mint}>Create</StyledButton>;
};

export default CreatePage;
