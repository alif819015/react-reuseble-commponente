import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <div
      className={cn("fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]", {
        visible: isOpen,
      })}
    >
      <div className="bg-white w-full max-w-sm rounded-md">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
