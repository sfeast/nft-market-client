import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import ItemCard from 'components/ItemCard';
import { Link } from 'react-router-dom';

import { nftActions } from 'store/actions';
import { nftSelectors } from 'store/selectors';

import { StyledBanner, StyledText, StyledBannerButtons } from 'components/HomePage/Banner/styled';

const Banner = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const featured = useSelector(nftSelectors.selectFeaturedResults)[0];

    const onClickExplore = () => {
        navigate('/items');
    };
    const onClickCreate = () => {
        navigate('/create');
    };

    useEffect(() => {
        dispatch(nftActions.getFeaturedResult());
    }, []);

    return (
        <StyledBanner>
            <div>
                <StyledText variant="h4" sx={{ color: 'text.light' }}>
                    An NFT happy place 🌈
                </StyledText>
                <StyledBannerButtons>
                    <Button variant="contained" color="primary" onClick={onClickExplore}>
                        Explore
                    </Button>

                    <Button variant="contained" color="primary" onClick={onClickCreate}>
                        Create
                    </Button>
                </StyledBannerButtons>
            </div>
            <div>
                {featured && (
                    <Link to={`/items/${featured?.contract}/${featured?.id}`}>
                        <ItemCard key={featured?.id} el={featured} />
                    </Link>
                )}
            </div>
        </StyledBanner>
    );
};

export default Banner;
