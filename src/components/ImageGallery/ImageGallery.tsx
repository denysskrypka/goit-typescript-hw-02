import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

// Визначаємо тип для об'єкта Photo (той самий, що використовувався в ImageCard)
interface Photo {
  id: string;
  urls: {
    small: string;
  };
  description: string;
}

// Визначаємо тип для пропсів компонента ImageGallery
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
