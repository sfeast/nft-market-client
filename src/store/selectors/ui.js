import { createSelector } from 'reselect';

export const selectUiState = state => state.ui;

export const selectShowItemsFilterModal = createSelector(
    selectUiState,
    uiState => uiState.showItemsFilterModal
);
