import moment from 'moment';
import { truncate } from 'utils/helpers/string';

const EVENT_TYPES_MESSAGES = {
    market_listing_created: event => `Market listing created by ${truncate(event?.seller, 10)}`,
    market_listing_canceled: event => `Listing canceled by ${truncate(event?.seller, 10)}`,
    market_listing_purchased: event => `Listing purchased by ${truncate(event?.buyer, 10)}`,
    market_offer_created: event =>
        `Market offer created by ${truncate(event?.buyer, 10)} with a price ${event?.price} CSPR`,
    market_offer_withdraw: event => `Offer withdraw`,
    market_offer_accepted: event =>
        `Offer accepted by ${truncate(event?.seller, 10)} from ${truncate(
            event?.buyer,
            10
        )} with a price ${event?.price} CSPR`,
    cep47_mint_one: event => `Minted by ${truncate(event?.owner, 10)}`,
    cep47_transfer_token: event => `Transfered to ${truncate(event?.owner, 10)}`,
    cep47_metadata_update: event => `Updated metadata`,
    cep47_approve_token: () => `Token approved`
};

export const parseActivity = data => {
    const sortedKeys = Object.keys(data).sort(
        (a, b) => moment(data[a].timestamp).valueOf() - moment(data[b].timestamp).valueOf()
    );
    const rows = sortedKeys.map(key => {
        return [
            moment(data[key].timestamp).format('MMMM Do YYYY, h:mm:ss a'),
            EVENT_TYPES_MESSAGES[data[key].event_type](data[key])
        ];
    });
    return {
        headings: ['Data', 'Description'],
        rows
    };
};
