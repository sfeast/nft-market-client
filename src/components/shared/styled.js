import { css } from 'styled-components';

export const baseAppStyles = css`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.app.maxWidth};
    padding-left: ${({ theme }) => theme.sizes.app.paddingLeft};
    padding-right: ${({ theme }) => theme.sizes.app.paddingRight};
`;
