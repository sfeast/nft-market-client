export const UI_ACTION_TYPES = {
    SHOW_ITEMS_FILTER_MODAL: 'SHOW_ITEMS_FILTER_MODAL',
    HIDE_ITEMS_FILTER_MODAL: 'HIDE_ITEMS_FILTER_MODAL'
};

export const setShowItemsFilterModal = () => ({
    type: UI_ACTION_TYPES.SHOW_ITEMS_FILTER_MODAL,
    payload: true
});

export const setHideItemsFilterModal = () => ({
    type: UI_ACTION_TYPES.HIDE_ITEMS_FILTER_MODAL,
    payload: false
});
