import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { walletActions } from 'store/actions';
import { marketSelectors, walletSelectors } from 'store/selectors';

import { DEPLOY_STATE } from 'constants/config';
import { usePreviousState } from 'hooks/react';

export const useMint = () => {
    const dispatch = useDispatch();
    // using key because connected seems to be wrong a lot :( Or does it not mean what I think it means?
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const deployState = useSelector(marketSelectors.selectDeployState);
    const previousDeployState = usePreviousState(deployState);

    useEffect(async () => {
        switch (true) {
            // TODO: replace alerts with app UI
            case !previousDeployState && deployState === DEPLOY_STATE.MINT:
                alert('Minting');
                break;
            case previousDeployState === DEPLOY_STATE.MINT && deployState === DEPLOY_STATE.SUCCESS:
                alert('Minting Success');
                break;
            case previousDeployState === DEPLOY_STATE.MINT && deployState === DEPLOY_STATE.ERROR:
                alert('Minting Failed');
                break;
            default:
                break;
        }
    }, [deployState]);

    useEffect(() => {
        if (!key) {
            dispatch(walletActions.connectionRequest());
        }
    }, [dispatch, key]);
};
