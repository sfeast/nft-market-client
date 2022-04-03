import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

import { StyledBanner, StyledText, StyledBannerButtons } from 'components/HomePage/Banner/styled';

const Banner = () => {
    const navigate = useNavigate();
    const onClickExplore = () => {
        navigate('/items');
    };
    const onClickCreate = () => {
        navigate('/create');
    };

    return (
        <StyledBanner>
            <div>
                <StyledText variant="h4" sx={{ color: 'text.light' }}>
                    A clean and simple NFT trading experience
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
        </StyledBanner>
    );
};

export default Banner;
