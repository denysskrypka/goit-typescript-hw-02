import css from "./ErrorMessage.module.css";

export default function ErrorMessage(): JSX.Element {
  return (
    <p className={css.message}>
      Oops, something went wrong. Please reload the page.
    </p>
  );
}
