import { Link } from 'react-router-dom';

import classes from 'components/Header/index.module.css';

const Header = () => {
    return (
        <div className={classes.root}>
            <Link to="/">homepage</Link>
            <br />
            <Link to="/items">items</Link>
            <br />
            <Link to="/items/123">item</Link>
            <br />
            <Link to="/itemhh">404</Link>
        </div>
    );
};

export default Header;
