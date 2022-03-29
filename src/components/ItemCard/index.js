import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StyledItemCard } from 'components/ItemCard/styled';

// todo: wip
const ItemCard = ({ el }) => {
    return (
        <StyledItemCard>
            <CardMedia component="img" alt={el.name} image={el.img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                </Typography>
            </CardContent>
            <CardActions>{el.price}</CardActions>
        </StyledItemCard>
    );
};

ItemCard.propTypes = {
    el: PropTypes.any
};

export default ItemCard;
