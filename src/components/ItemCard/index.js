import PropTypes from 'prop-types';
import { StyledItemCardGrid } from 'components/ItemCard/styled';

const ItemCard = ({ el }) => {
    return (
        <StyledItemCardGrid item container sm={4}>
            {el.name}
        </StyledItemCardGrid>
    );
};

ItemCard.propTypes = {
    el: PropTypes.any
};

export default ItemCard;
