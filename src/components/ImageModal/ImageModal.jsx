import ReactModal from "react-modal";

import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, image, onClose }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0F0F0",
      width: "100vh",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img className={css.img} src={image.urls.regular} />
    </ReactModal>
  );
}
