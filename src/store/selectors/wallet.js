import { createSelector } from 'reselect';
import { CLPublicKey } from 'casper-js-sdk';

export const selectWalletState = state => state.wallet;

export const selectPublicKeyHash = createSelector(
    selectWalletState,
    walletState => walletState.key
);

export const selectCLPublicKey = createSelector(
    selectPublicKeyHash,
    key => key && CLPublicKey.fromHex(key)
);

export const selectBalance = createSelector(selectWalletState, walletState => walletState.balance);
