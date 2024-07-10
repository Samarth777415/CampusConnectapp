import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <div className=''>
      <ToastContainer position="bottom-right" style={{ color: "black" }} />
    </div>
  )
}

export default Notification