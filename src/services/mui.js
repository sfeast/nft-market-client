import { createTheme } from '@mui/material/styles';
import { colors } from 'constants/style';

const theme = createTheme({
    background: '#FAFAFA',
    palette: {
        primary: {
            main: colors.BRAND_MAIN
        },
        text: {
            primary: colors.BRAND_MAIN_TEXT
        }
    }
});

export default theme;
