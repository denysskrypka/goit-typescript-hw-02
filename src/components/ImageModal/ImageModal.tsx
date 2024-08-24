import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Photo } from "../types";

interface ImageModalProps {
  isOpen: boolean;
  image: Photo;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  image,
  onClose,
}: ImageModalProps): JSX.Element {
  const customStyles: ReactModal.Styles = {
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
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.description}
      />
    </ReactModal>
  );
}
