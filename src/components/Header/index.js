import { Link } from 'react-router-dom';
import { useMatch } from 'react-router';
import cn from 'classnames';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { StyledHeader, StyledHeaderContent } from 'components/Header/styled';
import WalletConnect from 'components/WalletConnect';

const Header = () => {
    const homePageMatch = useMatch('');

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return (
        <StyledHeader
            position="fixed"
            className={cn({
                'header-with-bg': scrolled || !homePageMatch,
                'header-with-shadow': !!scrolled
            })}
        >
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
