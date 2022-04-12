import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { useIpfsInit } from 'hooks/ipfs';

export const IpfsContext = createContext(undefined);
export const IpfsProvider = ({ children }) => {
    const ipfs = useIpfsInit();

    return <IpfsContext.Provider value={ipfs}>{children}</IpfsContext.Provider>;
};
IpfsProvider.propTypes = {
    children: PropTypes.element
};
export const useIpfsContext = () => useContext(IpfsContext);
