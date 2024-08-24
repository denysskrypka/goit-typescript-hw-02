import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../types";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  listPhoto: Photo[];
  onOpen: (photo: Photo) => void;
}

export default function ImageGallery({
  listPhoto,
  onOpen,
}: ImageGalleryProps): JSX.Element {
  return (
    <ul className={css.list}>
      {listPhoto.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}
