import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

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

import { useCallbackDebounced } from 'hooks/callbacks';
import { nftActions } from 'store/actions';

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
    const dispatch = useDispatch();
    const homePageMatch = useMatch('');
    const { isSmallResolution } = useResolutionStyles(resolutionStylesParams);

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    const debouncedOnSearch = useCallbackDebounced(
        e => {
            const value = e.target.value;
            dispatch(nftActions.textSearch(value));
        },
        [dispatch],
        500
    );

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
                <Search onChange={debouncedOnSearch} buttonClassName="header-search-button" />
                {isSmallResolution ? (
                    <HeaderMenuDrawer />
                ) : (
                    <StyledButtonsWrapper>
                        <StyledLinkButton to="/items" sx={{ color: 'grey.50' }}>
                            Explore
                        </StyledLinkButton>
                        <StyledLinkButton to="/create" sx={{ color: 'grey.50' }}>
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
