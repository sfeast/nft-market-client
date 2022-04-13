import { combineReducers } from 'redux';

import UiReducer from 'store/reducers/ui';
import MarketReducer from 'store/reducers/market';
import WalletReducer from 'store/reducers/wallet';
import NFTReducer from 'store/reducers/nft';

const reducers = {
    ui: UiReducer,
    market: MarketReducer,
    wallet: WalletReducer,
    nft: NFTReducer
};

export default combineReducers(reducers);
