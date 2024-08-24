import { Photo } from "../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Photo;
  onOpen: (photo: Photo) => void;
}

export default function ImageCard({
  photo,
  onOpen,
}: ImageCardProps): JSX.Element {
  return (
    <div className={css.container}>
      <img
        className={css.image_card}
        src={photo.urls.small}
        alt={photo.description}
        onClick={() => onOpen(photo)}
      />
    </div>
  );
}
