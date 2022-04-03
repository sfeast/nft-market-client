import PropTypes from 'prop-types';
import ItemCard from 'components/ItemCard';
import { StyledItemsGrid } from 'components/ItemsGrid/styled';

const ItemsGrid = ({ items }) => {
    return (
        <StyledItemsGrid>
            {items.map(el => (
                <ItemCard key={el.id} el={el} />
            ))}
        </StyledItemsGrid>
    );
};

ItemsGrid.propTypes = {
    items: PropTypes.any
};

export default ItemsGrid;
