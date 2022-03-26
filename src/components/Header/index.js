import { Link } from 'react-router-dom';

import { StyledHeader } from 'components/Header/styled';

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">homepage</Link>
            <br />
            <Link to="/items">items</Link>
            <br />
            <Link to="/items/123">item</Link>
            <br />
            <Link to="/itemhh">404</Link>
        </StyledHeader>
    );
};

export default Header;
