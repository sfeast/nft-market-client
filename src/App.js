import Router from 'Router';
import { useWallet } from 'hooks/wallet';
import { useMint } from 'hooks/mint';
import { useMarket } from 'hooks/market';

const App = () => {
    useWallet();
    useMint();
    useMarket();

    return <Router />;
};

export default App;
