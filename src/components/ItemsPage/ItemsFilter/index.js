import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';

import FilterFormFields from 'components/ItemsPage/ItemsFilter/FilterFormFields';

import { setHideItemsFilterModal } from 'store/actions/ui';

const ItemsFilterForm = props => {
    const dispatch = useDispatch();

    const onSubmit = useCallback((values, form) => {
        // todo: submit values
        dispatch(setHideItemsFilterModal());
    }, []);

    const onClear = useCallback(form => {
        // todo: submit reset
        form.reset();
        dispatch(setHideItemsFilterModal());
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
