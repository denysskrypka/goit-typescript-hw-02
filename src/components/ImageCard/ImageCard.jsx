import css from "./ImageCard.module.css";

export default function ImageCard({ photo, onOpen }) {
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
