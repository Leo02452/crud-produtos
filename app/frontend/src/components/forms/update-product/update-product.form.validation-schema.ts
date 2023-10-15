import * as yup from 'yup';

const UpdateProductFormValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});

export default UpdateProductFormValidationSchema;
