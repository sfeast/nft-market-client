const requiredFieldValidation = value => (value ? undefined : 'The field is required');
const numberFieldValidation = value => (isNaN(value) ? 'The field must be a number' : undefined);
const httpsUrlFieldValidation = value => {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return value.match(reg) ? undefined : 'The field must be a HTTPS link';
};

export const validators = {
    required: requiredFieldValidation,
    number: numberFieldValidation,
    https: httpsUrlFieldValidation
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
