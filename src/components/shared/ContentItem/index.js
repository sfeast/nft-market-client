import PropTypes from 'prop-types';

import { StyledContentItem, StyledName } from 'components/shared/ContentItem/styled';

const ContentItem = ({ name, children }) => {
    return (
        <StyledContentItem>
            <StyledName>{name}</StyledName>
            {children}
        </StyledContentItem>
    );
};

ContentItem.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default ContentItem;
