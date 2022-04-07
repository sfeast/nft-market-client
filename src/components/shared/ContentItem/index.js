import PropTypes from 'prop-types';

import { StyledContentItem, StyledName } from 'components/shared/ContentItem/styled';

const ContentItem = ({ name, children, className }) => {
    return (
        <StyledContentItem className={className}>
            <StyledName>{name}</StyledName>
            {children}
        </StyledContentItem>
    );
};

ContentItem.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    className: PropTypes.string
};
ContentItem.defaultProps = {
    className: ''
};

export default ContentItem;
