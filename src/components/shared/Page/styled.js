import styled from 'styled-components';
import { baseAppStyles } from 'components/shared/styled';

export const StyledPage = styled.div`
    ${baseAppStyles};
    min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header.height});`};
    margin-top: ${({ theme }) => theme.sizes.header.height};
`;
