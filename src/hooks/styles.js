import useMediaQuery from '@mui/material/useMediaQuery';
import { MEDIA_QUERIES } from 'constants/styles';

const getResolutionStyles = (styles, matches) => {
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
            return phone?.small || getResolutionStyles(styles, { matchesMediumPhone: true });
        }
        case matchesMediumPhone: {
            return phone?.medium || getResolutionStyles(styles, { matchesLargePhone: true });
        }
        case matchesLargePhone: {
            return phone?.large || getResolutionStyles(styles, { matchesSmallDevice: true });
        }
        case matchesSmallDevice: {
            return smallDevice || getResolutionStyles(styles, { matchesMediumDevice: true });
        }
        case matchesMediumDevice: {
            return mediumDevice || getResolutionStyles(styles, { matchesLargeDevice: true });
        }
        case matchesLargeDevice: {
            return largeDevice || getResolutionStyles(styles, { matchesExtraLargeDevice: true });
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

 const { iconSize = 14 } = useComputedStyle({
    phone: {
        small: {
            iconSize: 14
        },
        medium: {
            iconSize: 16
        },
        large: {
            iconSize: 20
        }
    },
    smallDevice: {
        iconSize: 24
    },
    mediumDevice: {
        iconSize: 16
    },
    largeDevice: {
        iconSize: 12
    },
    extraLargeDevice: {
        iconSize: 12
    }
 });
 */
export const useResolutionStyles = styles => {
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

    return getResolutionStyles(styles, matches);
};
