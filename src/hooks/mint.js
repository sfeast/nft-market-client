import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { marketSelectors } from 'store/selectors';

import { DEPLOY_STATE } from 'constants/config';
import { usePreviousState } from 'hooks/react';
import { notifications } from 'utils/helpers/notifications';

export const useMint = () => {
    const deployState = useSelector(marketSelectors.selectDeployState);
    const deployHash = useSelector(marketSelectors.selectDeployHash);
    const previousDeployState = usePreviousState(deployState);
    const toastId = useRef();

    useEffect(async () => {
        switch (true) {
            case !previousDeployState && deployState === DEPLOY_STATE.MINT: {
                toastId.current = toast(notifications.mintingStarted(deployHash), {
                    render: notifications.mintingStarted(deployHash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.MINT &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.mintingSuccess,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.MINT && deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.mintingFailed + notifications.tryAgain,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }
            default:
                break;
        }
    }, [deployState, deployHash]);
};
