import PropTypes from 'prop-types';
import ItemCard from 'components/ItemCard';
import { Link } from 'react-router-dom';
import { StyledItemsGrid } from 'components/ItemsGrid/styled';

const ItemsGrid = ({ items }) => {
    return (
        <StyledItemsGrid>
            {items.map(el => (
                <Link to={`/items/${el.contract}/${el.token_id}`}>
                    <ItemCard key={el.id} el={el} />
                </Link>
            ))}
        </StyledItemsGrid>
    );
};

ItemsGrid.propTypes = {
    items: PropTypes.any
};

export default ItemsGrid;
