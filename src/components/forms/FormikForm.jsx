import { Formik } from 'formik';

const FormikForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default FormikForm;
