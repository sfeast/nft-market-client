import { getData, postData } from 'utils/helpers/xchRequests';
import { SERVER_ADDRESS, NFT_CONTRACT, SORT_OPTIONS } from 'constants/config';
import { nftSelectors } from 'store/selectors';

export const NFT_ACTION_TYPES = {
    LOAD_NFT: 'LOAD_NFT',
    NFT_LOADED: 'NFT_LOADED',
    LOAD_SEARCH: 'LOAD_SEARCH',
    SEARCH_LOADED: 'SEARCH_LOADED',
    SEARCH_FAILED: 'SEARCH_FAILED',
    UPDATE_SORT_ORDER: 'UPDATE_SORT_ORDER'
};

export const loadNft = (contract, token_id) => async dispatch => {
    dispatch({
        type: NFT_ACTION_TYPES.LOAD_NFT
    });

    const item = await getData(SERVER_ADDRESS + '/getItem', { contract, token_id });

    dispatch({
        type: NFT_ACTION_TYPES.NFT_LOADED,
        payload: item
    });
};

export const search = params => async (dispatch, getState) => {
    const store = getState();
    const sortOrder = nftSelectors.selectSearchOrder(store);

    dispatch({
        type: NFT_ACTION_TYPES.LOAD_SEARCH,
        params
    });

    const results = await postData(SERVER_ADDRESS + '/search', {
        search: params ? params : undefined
    }).catch(error => {
        dispatch({
            type: NFT_ACTION_TYPES.SEARCH_FAILED
        });
        console.log('Search error: ' + error);
        return;
    });

    dispatch({
        type: NFT_ACTION_TYPES.SEARCH_LOADED,
        payload: sort(results.slice(0), sortOrder)
    });
};

const dateSort = arr => {
    return arr.sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
    });
};

// items w/out price move to end of the list
const priceSort = (arr, sortFunc) => {
    return arr.sort(function (a, b) {
        var aHas = a.hasOwnProperty('price');
        var bHas = b.hasOwnProperty('price');
        if (aHas && bHas) {
            return sortFunc(a, b);
        }
        return aHas ? -1 : bHas ? 1 : 0;
    });
};

const sort = (data, order) => {
    let results;
    switch (order) {
        case SORT_OPTIONS.NEW_TO_OLD:
            results = dateSort(data);
            break;
        case SORT_OPTIONS.OLD_TO_NEW:
            results = dateSort(data).reverse();
            break;
        case SORT_OPTIONS.PRICE_LOW_TO_HIGH:
            results = priceSort(data, (a, b) => (a.price > b.price ? 1 : -1));
            break;
        case SORT_OPTIONS.PRICE_HIGH_TO_LOW:
            results = priceSort(data, (a, b) => (b.price > a.price ? 1 : -1));
            break;
        default:
    }

    return results;
};

export const updateSortOrder = sortOrder => async (dispatch, getState) => {
    const store = getState();
    const searchResults = nftSelectors.selectSearchResults(store);
    const results = sort(searchResults.slice(0), sortOrder);

    dispatch({
        type: NFT_ACTION_TYPES.UPDATE_SORT_ORDER,
        payload: {
            results,
            sortOrder
        }
    });
};

// TODO: refactor search to remove
const emptyObject = obj => {
    return Object.values(obj).every(value => {
        return value === null;
    });
};

// TODO: refactor search to remove
const getPriceRange = (from, to) => {
    const gFrom = isNaN(from) ? 0 : from;
    const gTo = isNaN(to) ? 0 : to;
    if (gFrom === 0 && gTo === 0) {
        return null;
    } else {
        return {
            min: gFrom,
            max: gTo
        };
    }
};

export const applyFilters = filter => async (dispatch, getState) => {
    const store = getState();
    const searchParams = nftSelectors.selectSearchParameters(store);

    const params = {
        text: searchParams?.text ? searchParams.text : null,
        buyNow: filter.byNowStatus ? filter.byNowStatus : null, // seller listed
        age: filter.newStatus ? 7 : null, //# of days since creation
        price: getPriceRange(parseInt(filter.priceRangeFrom), parseInt(filter.priceRangeTo))

        // these params not yet available
        // hasOffers: hasOffersStatus,
        // liveAuction: liveAuctionStatus,
    };
    dispatch(search(emptyObject(params) ? null : params));
};

export const textSearch = value => async (dispatch, getState) => {
    const store = getState();
    const searchParams = nftSelectors.selectSearchParameters(store);

    const params = {
        text: value ? value : null,
        ...searchParams
    };
    dispatch(search(emptyObject(params) ? null : params));
};

export const resetFilters = () => async dispatch => {
    dispatch(search(null));
};
