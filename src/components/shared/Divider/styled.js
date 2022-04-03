import styled from 'styled-components';

const getAlignItems = ({ position }) => {
    switch (position) {
        case 'left': {
            return 'flex-start';
        }
        case 'center': {
            return 'center';
        }
        case 'right': {
            return 'flex-end';
        }
        default: {
            return 'flex-start';
        }
    }
};

export const StyledDivider = styled.div`
    width: 100%;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: ${getAlignItems};

    hr {
        width: 100%;
    }
`;
