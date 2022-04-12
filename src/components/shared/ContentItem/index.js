import PropTypes from 'prop-types';

import { StyledContentItem, StyledName } from 'components/shared/ContentItem/styled';

const ContentItem = ({ name, children, className, flex }) => {
    return (
        <StyledContentItem className={className} flex={flex}>
            <StyledName>{name}</StyledName>
            {children}
        </StyledContentItem>
    );
};

ContentItem.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
ContentItem.defaultProps = {
    className: '',
    flex: 1
};

export default ContentItem;
