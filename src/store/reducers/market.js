import { MARKET_ACTION_TYPES } from 'store/actions/market';

const initialState = {
    deploy: null,
    details: null
};

const MarketReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKET_ACTION_TYPES.DEPLOY: {
            return {
                ...state,
                deploy: action.payload.type,
                details: action.payload.details
            };
        }
        case MARKET_ACTION_TYPES.COMPLETED_DEPLOY: {
            return {
                ...state,
                deploy: action.payload.type,
                details: action.payload.details
            };
        }
        default: {
            return state;
        }
    }
};

export default MarketReducer;
