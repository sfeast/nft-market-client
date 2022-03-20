import useMediaQuery from '@mui/material/useMediaQuery';
import { MEDIA_QUERIES } from 'constants/styles';

const getComputedStyles = (styles, matches) => {
    const {
        matchesSmallPhone = false,
        matchesMediumPhone = false,
        matchesLargePhone = false,
        matchesSmallDevice = false,
        matchesMediumDevice = false,
        matchesLargeDevice = false,
        matchesExtraLargeDevice = false
    } = matches;

    const { phone, smallDevice, mediumDevice, largeDevice, extraLargeDevice } = styles;

    // keep the order - from the smallest to the biggest
    // matches all "before" specified media-query params
    switch (true) {
        case matchesSmallPhone: {
            return phone?.small || getComputedStyles(styles, { matchesMediumPhone: true });
        }
        case matchesMediumPhone: {
            return phone?.medium || getComputedStyles(styles, { matchesLargePhone: true });
        }
        case matchesLargePhone: {
            return phone?.large || getComputedStyles(styles, { matchesSmallDevice: true });
        }
        case matchesSmallDevice: {
            return smallDevice || getComputedStyles(styles, { matchesMediumDevice: true });
        }
        case matchesMediumDevice: {
            return mediumDevice || getComputedStyles(styles, { matchesLargeDevice: true });
        }
        case matchesLargeDevice: {
            return largeDevice || getComputedStyles(styles, { matchesExtraLargeDevice: true });
        }
        case matchesExtraLargeDevice: {
            return extraLargeDevice || {};
        }
        default: {
            return {};
        }
    }
};

/**
 * @typedef {Object} Styles
 * @property {{ small: Object, medium: Object, large: Object }} phone
 * @property {Object} smallDevice
 * @property {Object} mediumDevice
 * @property {Object} largeDevice
 * @property {Object} extraLargeDevice
 *
 * Compute style object based on device size.
 *
 * @param {Styles} styles
 * @return {Object}
 *
 * @example:

 const { gridContainerXs = 8, iconSize = 64 } = useComputedStyle({
    phone: {
        small: {
            gridContainerXs: 8,
            iconSize: 14
        }
    },
    smallDevice: {
        gridContainerXs: 4,
        iconSize: 24
    },
    mediumDevice: {
        gridContainerXs: 3,
        iconSize: 16
    },
    largeDevice: {
        gridContainerXs: 2,
        iconSize: 12
    },
    extraLargeDevice: {
        gridContainerXs: 1,
        iconSize: 12
    }
 });
 */
export const useComputedStyle = styles => {
    const matchesSmallPhone = useMediaQuery(MEDIA_QUERIES.phone.small);
    const matchesMediumPhone = useMediaQuery(MEDIA_QUERIES.phone.medium);
    const matchesLargePhone = useMediaQuery(MEDIA_QUERIES.phone.large);
    const matchesSmallDevice = useMediaQuery(MEDIA_QUERIES.smallDevice);
    const matchesMediumDevice = useMediaQuery(MEDIA_QUERIES.mediumDevice);
    const matchesLargeDevice = useMediaQuery(MEDIA_QUERIES.largeDevice);
    const matchesExtraLargeDevice = useMediaQuery(MEDIA_QUERIES.extraLargeDevice);

    const matches = {
        matchesSmallPhone,
        matchesMediumPhone,
        matchesLargePhone,
        matchesSmallDevice,
        matchesMediumDevice,
        matchesLargeDevice,
        matchesExtraLargeDevice
    };

    return getComputedStyles(styles, matches);
};
