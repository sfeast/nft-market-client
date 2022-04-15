import PropTypes from 'prop-types';
import cn from 'classnames';

import CardActionArea from '@mui/material/CardActionArea';

import ItemCardContent from 'components/ItemCard/ItemCardContent';
import { StyledCard, StyledCardMedia } from 'components/ItemCard/styled';
import { getPrice, getIPFSImage } from 'utils/normalizers/nftItem';

const ItemCard = ({ el, className, hideContent }) => {
    return (
        <StyledCard className={cn({ [className]: !!className })}>
            <CardActionArea>
                <StyledCardMedia alt={el?.description} image={getIPFSImage(el?.image)} />
                {!hideContent && <ItemCardContent owner={el.owner} price={getPrice(el.price)} />}
            </CardActionArea>
        </StyledCard>
    );
};

ItemCard.propTypes = {
    el: PropTypes.any,
    css: PropTypes.string,
    className: PropTypes.string,
    hideContent: PropTypes.bool
};
ItemCard.defaultProps = {
    css: '',
    className: '',
    hideContent: false
};

export default ItemCard;
