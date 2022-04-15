import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import ItemCard from 'components/ItemCard';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';

import { nftActions } from 'store/actions';
import { nftSelectors } from 'store/selectors';

import { StyledBanner, StyledText, StyledBannerButtons } from 'components/HomePage/Banner/styled';

const Banner = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const featured = useSelector(nftSelectors.selectFeaturedResults)[0];
    console.log(featured, 'featured');

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
            <Grid container>
                <Grid
                    item
                    lg={6}
                    md={12}
                    xs={12}
                    sm={12}
                    display="flex"
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StyledText className={styles.title} variant="h4" sx={{ color: 'text.light' }}>
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
                </Grid>
                <Grid item lg={6} md={12} xs={12} sm={12} display="flex" justifyContent="center">
                    {featured && (
                        <Link to={`/items/${featured?.contract}/${featured?.token_id}`}>
                            <ItemCard className={styles.card} key={featured?.id} el={featured} />
                        </Link>
                    )}
                </Grid>
            </Grid>
        </StyledBanner>
    );
};

export default Banner;
