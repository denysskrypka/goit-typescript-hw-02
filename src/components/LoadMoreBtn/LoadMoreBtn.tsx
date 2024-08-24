import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoad: () => void;
}

export default function LoadMoreBtn({ onLoad }: LoadMoreBtnProps): JSX.Element {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
}
