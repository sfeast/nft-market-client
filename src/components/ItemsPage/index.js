import Grid from '@mui/material/Grid';
import ItemCard from '../ItemCard';

const mock = [
    { id: 0, name: "John's collection", price: 2, img: '' },
    { id: 1, name: "David's collection", price: 2.2, img: '' },
    { id: 2, name: "Eugene's collection", price: 1.9, img: '' },
    { id: 3, name: "Steven's collection", price: 0.5, img: '' },
    { id: 4, name: "Alex's collection", price: 0.8, img: '' }
];

const ItemsPage = () => {
    return (
        <Grid container>
            {mock.map(el => (
                <ItemCard key={el.id} el={el} />
            ))}
        </Grid>
    );
};

export default ItemsPage;
