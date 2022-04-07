import { StyledSelect } from 'components/ItemsPage/ItemsSort/styled';

const options = {
    newestToOldest: 'Newest to Oldest',
    oldestToNewest: 'Oldest to Newest',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low'
};

const ItemsSort = () => {
    const handleChange = e => {
        const value = e.target.value;
        // todo: handle sort submit
    };

    return (
        <StyledSelect label="Sort by" onChange={handleChange}>
            {Object.keys(options).map(opt => (
                <option key={opt} value={opt}>
                    {options[opt]}
                </option>
            ))}
        </StyledSelect>
    );
};

export default ItemsSort;
