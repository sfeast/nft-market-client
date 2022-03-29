import { useMatch } from 'react-router';
import { StyledFooter, StyledFooterContent } from 'components/Footer/styled';

const Footer = () => {
    const itemsPageMatch = useMatch('items');

    if (itemsPageMatch) {
        return null;
    }

    return (
        <StyledFooter>
            <StyledFooterContent>Footer</StyledFooterContent>
        </StyledFooter>
    );
};

export default Footer;
