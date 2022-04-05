import Divider from '@mui/material/Divider';

import ItemsGrid from 'components/ItemsGrid';
import ItemsAside from 'components/ItemsPage/ItemsAside';
import ItemsSort from 'components/ItemsPage/ItemsSort';
import { StyledItemsPage, StyledItemsGridWrapper } from 'components/ItemsPage/styled';
import { items } from 'mock';

const ItemsPage = () => {
    return (
        <StyledItemsPage>
            <ItemsAside />
            <Divider orientation="vertical" />
            <StyledItemsGridWrapper>
                <ItemsSort />
                <ItemsGrid items={items} />
            </StyledItemsGridWrapper>
        </StyledItemsPage>
    );
};

export default ItemsPage;
