import styled from 'styled-components';
import Divider from 'components/shared/Divider';

export const StyledHomePage = styled.div`
    padding-top: calc(100vh - ${({ theme }) => theme.sizes.header.height});
`;

export const StyledDivider = styled(Divider)`
    margin: 50px 0 0 0;
`;
