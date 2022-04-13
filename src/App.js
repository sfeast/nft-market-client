import Router from 'Router';
import { useWallet } from 'hooks/wallet';

const App = () => {
    useWallet();

    return <Router />;
};

export default App;
