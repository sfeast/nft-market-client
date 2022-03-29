import { Link } from 'react-router-dom';

import { StyledHeader, StyledHeaderContent } from 'components/Header/styled';
import WalletConnect from 'components/WalletConnect';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderContent>
                <Link to="/">homepage</Link>
                <br />
                <Link to="/items">items</Link>
                <br />
                <Link to="/items/123">item</Link>
                <br />
                <Link to="/itemhh">404</Link>
                <br />
                <Link to="/create">Create</Link>
                <br />
                <WalletConnect />
            </StyledHeaderContent>
        </StyledHeader>
    );
};

export default Header;
