import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import ItemsGrid from 'components/ItemsGrid';
import Banner from 'components/HomePage/Banner';
import { StyledHomePage, StyledDivider } from 'components/HomePage/styled';

import { nftSelectors } from 'store/selectors';

const HomePage = () => {
    const sliceResults = useSelector(nftSelectors.selectSliceResults);

    return (
        <StyledHomePage>
            <Banner />
            <StyledDivider>
                <Typography variant="h5" fontWeight="bold">
                    Latest Drops
                </Typography>
            </StyledDivider>
            <ItemsGrid items={sliceResults} />
        </StyledHomePage>
    );
};

export default HomePage;
