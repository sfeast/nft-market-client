import { useCallback } from 'react';
import _debounce from 'lodash/debounce';

export const useCallbackDebounced = (callback, dependencies, wait = 100) => {
    return useCallback(_debounce(callback, wait), dependencies);
};
