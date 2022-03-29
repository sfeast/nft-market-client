import { useEffect, useState } from 'react';
import { Signer } from 'casper-js-sdk';

import { StyledButton } from 'components/WalletConnect/styled';

const WalletConnect = () => {
    const [connected, setConnected] = useState(false);
    const [key, setKey] = useState(null);

    useEffect(async () => {
        const isConnected = await Signer.isConnected();
        setConnected(isConnected);

        window.addEventListener('signer:locked', msg => {
            setKey(null);
            setConnected(false);
        });
        window.addEventListener('signer:unlocked', msg => {
            if (msg.detail.isConnected) {
                setKey(msg.detail.activeKey);
                setConnected(true);
            }
        });
        window.addEventListener('signer:activeKeyChanged', msg => {
            if (msg.detail.isConnected) {
                setKey(msg.detail.activeKey);
                setConnected(true);
            }
        });
        window.addEventListener('signer:connected', msg => {
            setKey(msg.detail.activeKey);
            setConnected(true);
        });
        window.addEventListener('signer:disconnected', msg => {
            setKey(null);
            setConnected(false);
        });
    }, []);

    useEffect(async () => {
        if (connected) {
            try {
                const activePublicKey = await Signer.getActivePublicKey();
                setKey(activePublicKey);
            } catch (error) {
                console.log(error);
            }
        }
    }, [connected]);

    const connect = e => {
        if (!key) {
            Signer.sendConnectionRequest();
        }
    };

    return <StyledButton onClick={connect}>{key ? key : 'Connect'}</StyledButton>;
};

export default WalletConnect;
