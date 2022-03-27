import { Link } from 'react-router-dom';

import { StyledHeader, StyledHeaderContent } from 'components/Header/styled';

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
            </StyledHeaderContent>
        </StyledHeader>
    );
};

export default Header;
