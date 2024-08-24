import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ listPhoto, onOpen }) {
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
