import { combineReducers } from 'redux';

import UiReducer from 'store/reducers/ui';

const reducers = {
    ui: UiReducer
};

export default combineReducers(reducers);
