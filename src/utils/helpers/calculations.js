/**
 * Returns number of bytes in 'kb' or 'mb'
 *
 * @param value - number of bytes
 * @param unit {'mb', 'kb'}
 * @returns {number|*}
 */
export const getBytes = (value, unit) => {
    switch (unit) {
        case 'kb': {
            return value * 1000;
        }
        case 'mb': {
            return value * 1000 * 1000;
        }
        default: {
            return value;
        }
    }
};
