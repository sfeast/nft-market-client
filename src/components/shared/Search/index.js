import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import {
    StyledSearchButton,
    StyledDialogHeader,
    StyledTextField,
    StyledDialogBlur
} from 'components/shared/Search/styled';

const Search = ({ onChange, placeholder, small, children, buttonClassName, dialogClassName }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {small ? (
                <IconButton
                    onClick={handleClickOpen}
                    sx={{ color: 'grey.50' }}
                    className={cn({ [buttonClassName]: !!buttonClassName })}
                >
                    <SearchIcon />
                </IconButton>
            ) : (
                <StyledSearchButton
                    variant="outlined"
                    onClick={handleClickOpen}
                    sx={{ color: 'grey.50' }}
                    className={cn({ [buttonClassName]: !!buttonClassName })}
                >
                    <SearchIcon /> {placeholder}
                </StyledSearchButton>
            )}
            {open && (
                <StyledDialogBlur
                    open={true}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="md"
                    className={cn({ [dialogClassName]: !!dialogClassName })}
                >
                    <StyledDialogHeader>
                        <StyledTextField
                            onChange={onChange}
                            autoFocus
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            placeholder={placeholder}
                        />
                    </StyledDialogHeader>
                    {children && <DialogContent>{children}</DialogContent>}
                </StyledDialogBlur>
            )}
        </>
    );
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element,
    placeholder: PropTypes.string,
    small: PropTypes.bool,
    buttonClassName: PropTypes.string,
    dialogClassName: PropTypes.string
};
Search.defaultProps = {
    children: null,
    placeholder: 'Search..',
    small: false,
    buttonClassName: '',
    dialogClassName: ''
};

export default memo(Search);
