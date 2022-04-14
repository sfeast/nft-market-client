import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { marketSelectors } from 'store/selectors';

import { DEPLOY_STATE } from 'constants/config';
import { usePreviousState } from 'hooks/react';
import { notifications } from 'utils/helpers/notifications';

export const useMint = () => {
    const deployState = useSelector(marketSelectors.selectDeployState);
    const deployDetails = useSelector(marketSelectors.selectDeployDetails);
    const previousDeployState = usePreviousState(deployState);
    const toastId = useRef();

    const getItemPageRoute = useCallback(() => {
        // TODO: replace with proper routing approach
        return `https://localhost:3000/item_page/${deployDetails.contract}?id=${deployDetails.token_id}`;
    }, [deployDetails]);

    useEffect(async () => {
        switch (true) {
            case !previousDeployState && deployState === DEPLOY_STATE.MINT: {
                toastId.current = toast(notifications.mintingStarted(deployDetails.hash), {
                    render: notifications.mintingStarted(deployDetails.hash),
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
                    render: notifications.mintingSuccess(getItemPageRoute()),
                    autoClose: false,
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
    }, [deployState, deployDetails]);
};
