import { createSelector } from 'reselect';

export const selectMarketState = state => state.market;

export const selectDeployState = createSelector(
    selectMarketState,
    marketState => marketState.deploy
);
