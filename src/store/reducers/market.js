import { MARKET_ACTION_TYPES } from 'store/actions/market';

const initialState = {
    deploy: null
};

const MarketReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKET_ACTION_TYPES.DEPLOY: {
            return {
                ...state,
                deploy: action.payload
            };
        }
        case MARKET_ACTION_TYPES.COMPLETED_DEPLOY: {
            return {
                ...state,
                deploy: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default MarketReducer;
