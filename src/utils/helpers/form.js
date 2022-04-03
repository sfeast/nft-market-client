const required = value => (value ? undefined : 'Required');
const numbersOnly = value => (isNaN(value) ? 'Must be a number' : undefined);

export const validators = {
    required,
    numbersOnly
};
export const composeValidators =
    (...validators) =>
    value => {
        return validators.reduce((error, validator) => error || validator(value), undefined);
    };

export const fieldHasErrors = field => field.meta.invalid && field.meta.touched;

export const parseNumberValue = value => {
    const float = parseFloat(value);
    return float < 0 || isNaN(float) ? '' : float;
};
