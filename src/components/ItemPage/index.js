import { useParams } from 'react-router-dom';

const ItemPage = () => {
    const { itemId } = useParams();

    return <div>Item Page {itemId}</div>;
};

export default ItemPage;
