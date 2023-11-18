import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomToastContainer() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    );
}
  
export default CustomToastContainer