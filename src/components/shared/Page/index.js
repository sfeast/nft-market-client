import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledPage } from 'components/shared/Page/styled';

const Page = ({ children, className, css }) => {
    useEffect(() => {
        // reset scroll on switching pages
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledPage className={className} css={css}>
            {children}
        </StyledPage>
    );
};

Page.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    css: PropTypes.string
};
Page.defaultProps = {
    className: '',
    css: ''
};

export default Page;
