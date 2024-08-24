import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoad }) {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
}
