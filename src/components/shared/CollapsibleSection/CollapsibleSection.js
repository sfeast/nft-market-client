import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import _noop from 'lodash/noop';
import cn from 'classnames';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './CollapsibleSection.module.scss';

function CollapsibleSection({ className, title, children, ...restProps }) {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = useCallback(
        (event, isExpanded) => {
            setExpanded(isExpanded);
        },
        [expanded, setExpanded]
    );

    return (
        <Accordion
            {...restProps}
            disableGutters
            className={cn(styles.CollapsibleSection, className)}
            expanded={expanded}
            onChange={toggleExpanded}
        >
            <AccordionSummary
                className={styles.title}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}

CollapsibleSection.propTypes = {
    className: PropTypes.string,
    expanded: PropTypes.bool,
    handleCollapse: PropTypes.func
};

CollapsibleSection.defaultProps = {
    className: null,
    expanded: false,
    handleCollapse: _noop
};

export default CollapsibleSection;
