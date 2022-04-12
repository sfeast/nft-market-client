import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import { StyledCardContent } from 'components/ItemCard/ItemCardContent/styled';
import ContentItem from 'components/shared/ContentItem';

const ItemCardContent = ({ price, owner }) => {
    return (
        <StyledCardContent>
            <ContentItem name="Author" flex="2">
                <Typography variant="subtitle1">{owner}</Typography>
            </ContentItem>

            {price && (
                <ContentItem name="Price" flex="1">
                    <Typography variant="h6">{price}</Typography>
                </ContentItem>
            )}
        </StyledCardContent>
    );
};

ItemCardContent.propTypes = {
    owner: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ItemCardContent;
