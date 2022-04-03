import { useSelector, useDispatch } from 'react-redux';

import ItemsFilter from 'components/ItemsFilter';
import {
    StyledFilterButton,
    StyledItemsAside,
    StyledDrawer
} from 'components/ItemsPage/ItemsAside/styled';

import { useResolutionStyles } from 'hooks/styles';
import { selectShowItemsFilterModal } from 'store/selectors/ui';
import { setHideItemsFilterModal, setShowItemsFilterModal } from 'store/actions/ui';

const shouldRenderButton = {
    shouldRenderButton: true
};
const shouldNotRenderButton = {
    shouldRenderButton: false
};

const resolutionStylesParams = {
    phone: {
        small: shouldRenderButton,
        medium: shouldRenderButton,
        large: shouldRenderButton
    },
    smallDevice: shouldRenderButton,
    mediumDevice: shouldRenderButton,
    largeDevice: shouldRenderButton,
    extraLargeDevice: shouldNotRenderButton
};

const ItemsAside = () => {
    const dispatch = useDispatch();
    const { shouldRenderButton } = useResolutionStyles(resolutionStylesParams);
    const showItemsFilterModal = useSelector(selectShowItemsFilterModal);

    const onOpenFilterModal = () => {
        dispatch(setShowItemsFilterModal());
    };

    const onCloseFilterModal = () => {
        dispatch(setHideItemsFilterModal());
    };

    return (
        <>
            <StyledDrawer anchor="bottom" open={showItemsFilterModal} onClose={onCloseFilterModal}>
                <ItemsFilter />
            </StyledDrawer>

            {shouldRenderButton ? (
                <StyledFilterButton
                    variant="contained"
                    color="primary"
                    sx={{ color: 'text.light' }}
                    onClick={onOpenFilterModal}
                >
                    Filter
                </StyledFilterButton>
            ) : (
                <StyledItemsAside>
                    <ItemsFilter />
                </StyledItemsAside>
            )}
        </>
    );
};

export default ItemsAside;
