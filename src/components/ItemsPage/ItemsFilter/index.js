import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';

import FilterFormFields from 'components/ItemsPage/ItemsFilter/FilterFormFields';

import { setHideItemsFilterModal } from 'store/actions/ui';

import { nftActions } from 'store/actions';

const ItemsFilterForm = props => {
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        (values, form) => {
            dispatch(setHideItemsFilterModal());
            dispatch(nftActions.applyFilters(values));
        },
        [dispatch]
    );

    const onClear = useCallback(form => {
        form.reset();
        dispatch(setHideItemsFilterModal());
        dispatch(nftActions.resetFilters());
    }, []);

    return (
        <Form
            onSubmit={onSubmit}
            render={formProps => (
                <FilterFormFields {...props} {...formProps} handleClear={onClear} />
            )}
        />
    );
};

export default ItemsFilterForm;
