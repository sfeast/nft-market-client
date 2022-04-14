import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import styles from './TokenPropertyItem.module.scss';

const TokenPropertyItem = ({ type, name }) => {
    return (
        <div className={styles.TokenPropertyItem}>
            <Typography className={styles.type}>{type}</Typography>
            <Typography className={styles.name}>{name}</Typography>
        </div>
    );
};

TokenPropertyItem.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default TokenPropertyItem;
