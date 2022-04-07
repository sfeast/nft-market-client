import { useCallback } from 'react';
import { useMatch } from 'react-router';
import cn from 'classnames';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import {
    StyledHeader,
    StyledHeaderContent,
    StyledButtonsWrapper,
    StyledLinkButton
} from 'components/Header/styled';
import WalletConnect from 'components/WalletConnect';
import HomeButton from 'components/Header/HomeButton';
import Search from 'components/shared/Search';
import HeaderMenuDrawer from 'components/Header/HeaderMenuDrawer';

import { useResolutionStyles } from 'hooks/styles';

const smallResolution = {
    isSmallResolution: true
};
const notSmallResolution = {
    isSmallResolution: false
};

const resolutionStylesParams = {
    phone: {
        small: smallResolution,
        medium: smallResolution,
        large: smallResolution
    },
    smallDevice: smallResolution,
    mediumDevice: smallResolution,
    largeDevice: notSmallResolution,
    extraLargeDevice: notSmallResolution
};

const Header = () => {
    const homePageMatch = useMatch('');
    const { isSmallResolution } = useResolutionStyles(resolutionStylesParams);

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    const onSearch = useCallback(e => {
        const value = e.target.value;
        // todo: handle search input
    }, []);

    return (
        <StyledHeader
            position="fixed"
            className={cn({
                'header-with-bg': scrolled || !homePageMatch,
                'header-with-shadow': !!scrolled
            })}
        >
            <StyledHeaderContent>
                <HomeButton />
                <Search onChange={onSearch} buttonClassName="header-search-button" />
                {isSmallResolution ? (
                    <HeaderMenuDrawer />
                ) : (
                    <StyledButtonsWrapper>
                        <StyledLinkButton to="/items" color="background">
                            Explore
                        </StyledLinkButton>
                        <StyledLinkButton to="/create" color="background">
                            Create
                        </StyledLinkButton>
                        <WalletConnect />
                    </StyledButtonsWrapper>
                )}
            </StyledHeaderContent>
        </StyledHeader>
    );
};

export default Header;