import * as yup from 'yup';

const CreateProductFormValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});

export default CreateProductFormValidationSchema;
