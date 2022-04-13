import { createSelector } from 'reselect';

export const selectNftState = state => state.nft;

export const selectCurrentItem = createSelector(selectNftState, nftState => nftState.item);

export const selectSearchResults = createSelector(selectNftState, nftState => nftState.results);

export const selectSliceResults = createSelector(selectNftState, nftState => nftState.sliceResults);

export const selectSearchParameters = createSelector(
    selectNftState,
    nftState => nftState.searchParams
);

export const selectSearchOrder = createSelector(selectNftState, nftState => nftState.sortOrder);
