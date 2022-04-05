import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
`;

export const StyledLabel = styled.label`
    margin-right: 10px;
    white-space: nowrap;
`;

export const StyledSelectWrapper = styled.div`
    width: 100%;
    padding: 5px;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.palette.grey.light};
    border-style: solid;

    &:hover,
    &:focus {
        border-color: ${({ theme }) => theme.palette.black.dark};
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    height: 100%;
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
`;
