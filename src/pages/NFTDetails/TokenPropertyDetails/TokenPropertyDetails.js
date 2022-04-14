import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TokenPropertyItem from 'components/shared/TokenPropertyItem';

import styles from './TokenPropertyDetails.module.scss';

const TokenPropertyDetails = ({ tokenProps }) => {
    return (
        <div className={styles.TokenPropertyDetails}>
            {(!!tokenProps?.length &&
                tokenProps?.map((prop, i) => {
                    return <TokenPropertyItem key={i} type={prop.type} name={prop.name} />;
                })) || <Typography alignItems="center">This NFT has no properties</Typography>}
        </div>
    );
};

TokenPropertyDetails.propTypes = {
    tokenProps: PropTypes.object
};

TokenPropertyDetails.defaultProps = {
    tokenProps: null
};

export default TokenPropertyDetails;
