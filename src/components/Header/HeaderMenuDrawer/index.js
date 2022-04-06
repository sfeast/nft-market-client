import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { StyledSwipeableDrawer } from 'components/Header/HeaderMenuDrawer/styled';

import WalletConnect from 'components/WalletConnect';
import LinkButton from 'components/shared/LinkButton';

const HeaderMenuDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
                <MenuIcon />
            </IconButton>
            <StyledSwipeableDrawer
                anchor="right"
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
            >
                <WalletConnect />
                <LinkButton
                    to="/items"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={handleClose}
                >
                    Explore
                </LinkButton>
                <LinkButton
                    to="/create"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={handleClose}
                >
                    Create
                </LinkButton>
            </StyledSwipeableDrawer>
        </>
    );
};

export default HeaderMenuDrawer;
