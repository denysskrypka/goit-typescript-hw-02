import { Field, Form, Formik, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface FormValues {
  search: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    values.search !== ""
      ? onSearch(values.search)
      : toast.error("Please fill search field", { position: "top-right" });
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form className={css.header_form}>
            <Field
              className={css.header_form_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="search"
            />
            <button className={css.header_form_button} type="submit">
              Search
            </button>
            <Toaster />
          </Form>
        </Formik>
      </div>
    </header>
  );
}
