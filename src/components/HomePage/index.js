import Typography from '@mui/material/Typography';

import ItemsGrid from 'components/ItemsGrid';
import Banner from 'components/HomePage/Banner';
import { StyledHomePage, StyledDivider } from 'components/HomePage/styled';

import { items } from 'mock';

const HomePage = () => {
    return (
        <StyledHomePage>
            <Banner />
            <StyledDivider
                title={
                    <Typography variant="h5" fontWeight="bold">
                        Latest Drops
                    </Typography>
                }
            />
            <ItemsGrid items={items} />
        </StyledHomePage>
    );
};

export default HomePage;
