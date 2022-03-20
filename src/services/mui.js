import { createTheme } from '@mui/material/styles';
import { COLORS } from 'constants/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.BRAND_MAIN
        },
        text: {
            primary: COLORS.BRAND_MAIN_TEXT
        }
    }
});

export default theme;
