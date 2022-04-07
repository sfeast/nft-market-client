import styled from 'styled-components';
import Select from 'components/shared/Select';

export const StyledSelect = styled(Select)`
    margin-bottom: ${({ theme }) => theme.sizes.app.padding};
`;
