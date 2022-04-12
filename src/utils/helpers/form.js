const requiredFieldValidation = value => (value ? undefined : 'Required');
const numberFieldValidation = value => (isNaN(value) ? 'Numbers only' : undefined);
const httpsUrlFieldValidation = value => {
    const reg =
        'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
    return value ? (value.match(reg) ? undefined : 'Incorrect url') : undefined;
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

export const getFieldError = field => {
    return fieldHasErrors(field) ? field.meta.error : '';
};

export const parseNumberValue = value => {
    const float = parseFloat(value);
    return float < 0 || isNaN(float) ? '' : float;
};
