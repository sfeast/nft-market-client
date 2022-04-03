import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const StyledCard = styled(Card)`
    border-radius: 6px;
    transition: 0.3s;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 22px rgba(0, 0, 0, 0.15);

    &:hover {
        transform: scale3d(1.02, 1.02, 1);
    }
`;

export const StyledCardMedia = styled(CardMedia)`
    padding-top: 100%; // simulates inherited height from dynamic width, ratio is 1:1
    width: 100%;
`;
