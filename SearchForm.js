import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SearchForm = ({ onSearch }) => {
  const formik = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema: Yup.object({
      query: Yup.string().required('Search query is required'),
    }),
    onSubmit: values => {
      onSearch(values.query);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="query"
        value={formik.values.query}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.query && formik.errors.query ? (
        <div>{formik.errors.query}</div>
      ) : null}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;