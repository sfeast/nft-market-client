import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
    .Toastify {
        &__toast {
            min-height: unset;
            user-select: none;
            box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%),
                0px 1px 18px 0px rgb(0 0 0 / 12%);

            &--success {
                background-color: ${({ theme }) => theme.palette.success.light};
                color: ${({ theme }) => theme.palette.success.contrastText};

                .Toastify__toast-icon svg {
                    fill: ${({ theme }) => theme.palette.success.dark};
                    opacity: 0.5;
                }
            }
            &--info {
                background-color: ${({ theme }) => theme.palette.info.light};
                color: ${({ theme }) => theme.palette.info.contrastText};

                .Toastify__toast-icon svg {
                    fill: ${({ theme }) => theme.palette.info.dark};
                    opacity: 0.5;
                }
            }
            &--warning {
                background-color: ${({ theme }) => theme.palette.warning.light};
                color: ${({ theme }) => theme.palette.warning.contrastText};

                .Toastify__toast-icon svg {
                    fill: ${({ theme }) => theme.palette.warning.dark};
                    opacity: 0.5;
                }
            }
            &--error {
                background-color: ${({ theme }) => theme.palette.error.light};
                color: ${({ theme }) => theme.palette.error.contrastText};

                .Toastify__toast-icon svg {
                    fill: ${({ theme }) => theme.palette.error.dark};
                    opacity: 0.5;
                }
            }
            &--default {
                background-color: ${({ theme }) => theme.palette.primary.light};
                color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.dark)};
            }
        }
        &__close-button {
            color: ${({ theme }) => theme.palette.common.white};
            opacity: 1;
        }
    }
`;
