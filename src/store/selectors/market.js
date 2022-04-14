import { createSelector } from 'reselect';

export const selectMarketState = state => state.market;

export const selectDeployState = createSelector(
    selectMarketState,
    marketState => marketState.deploy
);

export const selectDeployHash = createSelector(selectMarketState, marketState => marketState.hash);
