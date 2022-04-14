import { useEffect, useRef, useReducer } from 'react';
import _mergeWith from 'lodash/mergeWith';

export const usePreviousState = value => {
    const valueRef = useRef();

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef.current;
};

export const useExtendableState = (initialState = {}, merge = false) => {
    function mergeCopyArrays(objValue, srcValue) {
        if (Array.isArray(srcValue)) {
            return srcValue;
        }
        return undefined;
    }

    return useReducer((previous, next) => {
        next = next || {};
        if (merge) {
            return _mergeWith({}, previous, next, mergeCopyArrays);
        }

        return { ...previous, ...next };
    }, initialState);
};

export const useComponentDidUpdateEffect = (callback, dependencies) => {
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            callback();
        }
    }, dependencies);
};
