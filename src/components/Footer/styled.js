import styled from 'styled-components';
import { baseAppStyles } from 'components/shared/styled';

export const StyledFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: center;
`;

export const StyledFooterContent = styled.div`
    ${baseAppStyles}
`;
