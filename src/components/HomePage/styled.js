import styled from 'styled-components';
import Divider from 'components/shared/Divider';

export const StyledHomePage = styled.div`
    padding-top: calc(100vh - ${({ theme }) => theme.sizes.header.height});
`;

export const StyledDivider = styled(Divider)`
    margin: 30px 0 ${({ theme }) => theme.sizes.app.padding} 0;
`;
