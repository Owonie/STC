import { ToastContainer, toast } from 'react-toastify';
import styles from './toast.module.css';

const ToastMessage = (props) => {
  const toastSuccess = (e) => {
    e.preventDefault();
    toast.success(e, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const toastError = (e) => {
    e.preventDefault();
    toast.error(e, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return <ToastContainer />;
};

export default ToastMessage;
