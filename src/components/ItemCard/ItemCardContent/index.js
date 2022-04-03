import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import { StyledCardContent } from 'components/ItemCard/ItemCardContent/styled';
import ContentItem from 'components/shared/ContentItem';

const ItemCardContent = ({ price, owner }) => {
    return (
        <StyledCardContent>
            <ContentItem name="Author">
                <Typography variant="h6">{owner}</Typography>
            </ContentItem>

            <ContentItem name="Price">
                <Typography variant="h6">{price}</Typography>
            </ContentItem>
        </StyledCardContent>
    );
};

ItemCardContent.propTypes = {
    owner: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ItemCardContent;
