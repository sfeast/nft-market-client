import { combineReducers } from 'redux';

import UiReducer from 'store/reducers/ui';
import MarketReducer from 'store/reducers/market';
import WalletReducer from 'store/reducers/wallet';

const reducers = {
    ui: UiReducer,
    market: MarketReducer,
    wallet: WalletReducer
};

export default combineReducers(reducers);
