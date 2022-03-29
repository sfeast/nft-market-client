import ItemsGrid from 'components/ItemsGrid';
import ItemsAside from 'components/ItemsPage/ItemsAside';
import { StyledItemsPage } from 'components/ItemsPage/styled';

const ItemsPage = () => {
    return (
        <StyledItemsPage>
            <ItemsAside />
            <ItemsGrid />
        </StyledItemsPage>
    );
};

export default ItemsPage;
