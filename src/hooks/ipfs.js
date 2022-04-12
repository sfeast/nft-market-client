import { useEffect, useState } from 'react';
import * as IPFS from 'ipfs-core';

export const useIpfsInit = () => {
    const [ipfs, setIpfs] = useState();

    useEffect(async () => {
        try {
            if (!ipfs) {
                console.info('IPFS service initialisation is STARTED');
                const ipfsInstance = await IPFS.create();
                console.info('IPFS service is initialised');
                setIpfs(ipfsInstance);
            }
        } catch (err) {
            alert(err);
            console.error('IPFS service initialisation is FAILED');
            console.error(err);
        }
    }, [ipfs]);

    return ipfs;
};
