import styled from 'styled-components';

export const StyledContentItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: hidden;
    flex: ${({ flex }) => flex};

    & > * {
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
    }
`;

export const StyledName = styled.span`
    opacity: 0.8;
    font-size: 10px;
`;
