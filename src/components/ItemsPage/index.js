import Divider from '@mui/material/Divider';

import ItemsGrid from 'components/ItemsGrid';
import ItemsAside from 'components/ItemsPage/ItemsAside';
import { StyledItemsPage } from 'components/ItemsPage/styled';
import { items } from 'mock';

const ItemsPage = () => {
    return (
        <StyledItemsPage>
            <ItemsAside />
            <Divider orientation="vertical" />
            <ItemsGrid items={items} />
        </StyledItemsPage>
    );
};

export default ItemsPage;
