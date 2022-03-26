import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledPage } from 'components/shared/Page/styled';

const Page = ({ children }) => {
    useEffect(() => {
        // reset scroll on switching pages
        window.scrollTo(0, 0);
    }, []);

    return <StyledPage>{children}</StyledPage>;
};

Page.propTypes = {
    children: PropTypes.element.isRequired
};

export default Page;
