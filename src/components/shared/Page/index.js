import { useEffect } from 'react';
import PropTypes from 'prop-types';

import classes from 'components/shared/Page/index.module.css';

const Page = ({ children }) => {
    useEffect(() => {
        // reset scroll on switching pages
        window.scrollTo(0, 0);
    }, []);

    return <div className={classes.root}>{children}</div>;
};

Page.propTypes = {
    children: PropTypes.element
};

export default Page;
