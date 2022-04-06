/**
 * Truncate a string
 *
 * @example
 * truncate("123456789", 7, "...") => "12...89"
 *
 * @param str
 * @param maxLength
 * @param separator
 * @returns {string}
 */

export const truncate = (str, maxLength = 8, separator = '...') => {
    if (str.length <= maxLength) return str;
    const charsToShow = maxLength - separator.length;
    const startChars = Math.ceil(charsToShow / 2);
    const endChars = Math.floor(charsToShow / 2);

    return str.substr(0, startChars) + separator + str.substr(str.length - endChars);
};
