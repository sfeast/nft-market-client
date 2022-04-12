import { StyledToastContainer } from 'components/ToastContainer/styled';

const ToastContainerWrapper = () => (
    <StyledToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        limit={3}
    />
);

export default ToastContainerWrapper;
