import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { marketActions } from 'store/actions';
import { marketSelectors, walletSelectors } from 'store/selectors';

import { StyledButton } from 'components/CreatePage/styled';

import { DEPLOY_STATE } from 'constants/config';

const CreatePage = () => {
    const dispatch = useDispatch();
    // using key because connected seems to be wrong a lot :( Or does it not mean what I think it means?
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const deployState = useSelector(marketSelectors.selectDeployState);
    const [state, setState] = useState();

    useEffect(async () => {
        switch (true) {
            // TODO: replace alerts with app UI
            case !state && deployState === DEPLOY_STATE.MINT:
                alert('Minting');
                break;
            case state === DEPLOY_STATE.MINT && deployState === DEPLOY_STATE.SUCCESS:
                alert('Minting Success');
                break;
            case state === DEPLOY_STATE.MINT && deployState === DEPLOY_STATE.ERROR:
                alert('Minting Failed');
                break;
            default:
                break;
        }
        setState(deployState);
    }, [deployState]);

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
        if (!key) {
            alert('Please connect Casper Signer');
        }
        dispatch(marketActions.mint(metaData));
    };

    return (
        <StyledButton onClick={mint} disabled={!key || deployState === DEPLOY_STATE.MINT}>
            Create
        </StyledButton>
    );
};

export default CreatePage;
