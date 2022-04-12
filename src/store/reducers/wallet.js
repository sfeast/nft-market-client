import { WALLET_ACTION_TYPES } from 'store/actions/wallet';

const initialState = {
    key: null,
    balance: null
};

const WalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case WALLET_ACTION_TYPES.SET_KEY: {
            return {
                ...state,
                key: action.payload
            };
        }

        case WALLET_ACTION_TYPES.SET_BALANCE: {
            return {
                ...state,
                balance: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default WalletReducer;
