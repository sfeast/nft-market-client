import { UI_ACTION_TYPES } from 'store/actions/ui';

const initialState = {
    showItemsFilterModal: false
};

const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_ACTION_TYPES.HIDE_ITEMS_FILTER_MODAL:
        case UI_ACTION_TYPES.SHOW_ITEMS_FILTER_MODAL: {
            return {
                ...state,
                showItemsFilterModal: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default UiReducer;
