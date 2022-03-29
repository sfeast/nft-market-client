import { useSelector, useDispatch } from 'react-redux';

import ItemsFilter from 'components/ItemsFilter';
import Drawer from 'components/shared/Drawer';
import { StyledButton, StyledItemsAside } from 'components/ItemsPage/ItemsAside/styled';

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
    largeDevice: shouldNotRenderButton,
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
            <Drawer anchor="bottom" open={showItemsFilterModal} onClose={onCloseFilterModal} form>
                <ItemsFilter />
            </Drawer>

            {shouldRenderButton ? (
                <StyledButton variant="contained" onClick={onOpenFilterModal}>
                    Filter
                </StyledButton>
            ) : (
                <StyledItemsAside>
                    <ItemsFilter />
                </StyledItemsAside>
            )}
        </>
    );
};

export default ItemsAside;
