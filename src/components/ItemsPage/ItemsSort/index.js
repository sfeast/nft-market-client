import Select from 'components/shared/Select';

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
        <Select label="Sort by" onChange={handleChange}>
            {Object.keys(options).map(opt => (
                <option key={opt} value={opt}>
                    {options[opt]}
                </option>
            ))}
        </Select>
    );
};

export default ItemsSort;
