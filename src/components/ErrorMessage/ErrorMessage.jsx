import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      Oops something went wrong please reload the page
    </p>
  );
}
