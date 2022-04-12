import { StyledSelect } from 'components/ItemsPage/ItemsSort/styled';
import { useDispatch } from 'react-redux';

import { nftActions } from 'store/actions';
import { SORT_OPTIONS } from 'constants/config';

const ItemsSort = () => {
    const dispatch = useDispatch();
    const handleChange = e => {
        const value = e.target.value;
        dispatch(nftActions.updateSortOrder(SORT_OPTIONS[value]));
    };

    return (
        <StyledSelect label="Sort by" onChange={handleChange}>
            {Object.keys(SORT_OPTIONS).map(opt => (
                <option key={opt} value={opt}>
                    {SORT_OPTIONS[opt]}
                </option>
            ))}
        </StyledSelect>
    );
};

export default ItemsSort;
