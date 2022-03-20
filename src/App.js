import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&.Mui-checked': {
        color: theme.palette.text.primary
    }
}));

const App = () => {
    return (
        <div>
            <header>
                <CustomCheckbox />
                Casper NFT
            </header>
        </div>
    );
};

export default App;
