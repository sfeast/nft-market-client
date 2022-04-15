import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { marketSelectors } from 'store/selectors';

import { DEPLOY_STATE, NFT_CONTRACT } from 'constants/config';
import { usePreviousState } from 'hooks/react';
import { notifications } from 'utils/helpers/notifications';

export const useMarket = () => {
    const deployState = useSelector(marketSelectors.selectDeployState);
    const deployDetails = useSelector(marketSelectors.selectDeployDetails);
    const previousDeployState = usePreviousState(deployState);
    const toastId = useRef();

    useEffect(() => {
        switch (true) {
            case !previousDeployState && deployState === DEPLOY_STATE.APPROVE: {
                toastId.current = toast(notifications.approvalStarted(deployDetails.hash), {
                    render: notifications.approvalStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.APPROVE &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.approvalSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }

            case previousDeployState === DEPLOY_STATE.APPROVE &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.approvalFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.LIST: {
                toastId.current = toast(notifications.createListingStarted(deployDetails.hash), {
                    render: notifications.createListingStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.LIST &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.createListingSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.LIST && deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.createListingFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.CANCEL_LISTING: {
                toastId.current = toast(notifications.cancelListingStarted(deployDetails.hash), {
                    render: notifications.cancelListingStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.CANCEL_LISTING &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.cancelListingSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }

            case previousDeployState === DEPLOY_STATE.CANCEL_LISTING &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.cancelListingFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.BUY_LISTING: {
                toastId.current = toast(notifications.buyListingStarted(deployDetails.hash), {
                    render: notifications.buyListingStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.BUY_LISTING &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.buyListingSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.BUY_LISTING &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.buyListingFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.MAKE_OFFER: {
                toastId.current = toast(notifications.makeOfferStarted(deployDetails.hash), {
                    render: notifications.makeOfferStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.MAKE_OFFER &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.makeOfferSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }

            case previousDeployState === DEPLOY_STATE.MAKE_OFFER &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.makeOfferFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.WITHDRAW_OFFER: {
                toastId.current = toast(notifications.withdrawOfferStarted(deployDetails.hash), {
                    render: notifications.withdrawOfferStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.WITHDRAW_OFFER &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.withdrawOfferSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.WITHDRAW_OFFER &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.withdrawOfferFailed,
                    autoClose: 3000,
                    isLoading: false
                });
                break;
            }

            case !previousDeployState && deployState === DEPLOY_STATE.ACCEPT_OFFER: {
                toastId.current = toast(notifications.acceptOfferStarted(deployDetails.hash), {
                    render: notifications.acceptOfferStarted(deployDetails.hash),
                    type: toast.TYPE.INFO,
                    autoClose: false,
                    closeOnClick: false,
                    isLoading: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.ACCEPT_OFFER &&
                deployState === DEPLOY_STATE.SUCCESS: {
                toast.update(toastId.current, {
                    type: toast.TYPE.SUCCESS,
                    render: notifications.acceptOfferSuccess,
                    autoClose: false,
                    isLoading: false,
                    closeOnClick: true
                });
                break;
            }
            case previousDeployState === DEPLOY_STATE.ACCEPT_OFFER &&
                deployState === DEPLOY_STATE.ERROR: {
                toast.update(toastId.current, {
                    type: toast.TYPE.ERROR,
                    render: notifications.acceptOfferFailed,
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
