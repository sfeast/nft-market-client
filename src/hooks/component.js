import { useEffect, useRef } from 'react';

export const usePreviousState = value => {
    const valueRef = useRef();

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef.current;
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
