import ItemCard from 'components/ItemCard';
import { StyledItemsGrid } from 'components/ItemsGrid/styled';

const mock = [
    {
        id: 0,
        name: "John's collection",
        price: 2,
        img: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    },
    {
        id: 1,
        name: "David's collection",
        price: 2.2,
        img: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    },
    {
        id: 2,
        name: "Eugene's collection",
        price: 1.9,
        img: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    },
    {
        id: 3,
        name: "Steven's collection",
        price: 0.5,
        img: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    },
    {
        id: 4,
        name: "Alex's collection",
        price: 0.8,
        img: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    }
];

const ItemsGrid = () => {
    return (
        <StyledItemsGrid>
            {mock.map(el => (
                <ItemCard key={el.id} el={el} />
            ))}
        </StyledItemsGrid>
    );
};

export default ItemsGrid;
