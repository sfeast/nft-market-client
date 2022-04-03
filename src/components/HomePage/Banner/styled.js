import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const StyledBanner = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    background-image: linear-gradient(
        to right top,
        ${({ theme }) => theme.palette.secondary.main},
        #fc81b2,
        #da97e5,
        #a0afff,
        ${({ theme }) => theme.palette.primary.main}
    );

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.header.height} 10% 0 10%;
`;

export const StyledBannerButtons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 50px 0;

    .MuiButton-root {
        margin-right: 20px;
    }
`;

export const StyledText = styled(Typography)`
    font-weight: bold;
    text-shadow: 0 0 10px rgb(0 0 0 / 67%);
`;
