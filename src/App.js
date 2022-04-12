import Router from 'Router';
import { useWallet } from 'hooks/wallet';
import { useMint } from 'hooks/mint';

const App = () => {
    useWallet();
    useMint();

    return <Router />;
};

export default App;
