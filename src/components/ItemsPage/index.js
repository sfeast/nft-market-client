import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Divider from '@mui/material/Divider';

import ItemsGrid from 'components/ItemsGrid';
import ItemsAside from 'components/ItemsPage/ItemsAside';
import ItemsSort from 'components/ItemsPage/ItemsSort';
import { StyledItemsPage } from 'components/ItemsPage/styled';

import { nftSelectors } from 'store/selectors';

const ItemsPage = () => {
    const searchResults = useSelector(nftSelectors.selectSearchResults);

    return (
        <StyledItemsPage>
            <ItemsAside />
            <Divider orientation="vertical" />
            <div>
                <ItemsSort />
                <ItemsGrid items={searchResults} />
            </div>
        </StyledItemsPage>
    );
};

export default ItemsPage;
