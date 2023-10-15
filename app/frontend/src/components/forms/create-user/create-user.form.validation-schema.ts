import * as yup from 'yup';

const RegisterUserFormValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Fprmato de email inválido').required(),
  password: yup.string().required(),
});

export default RegisterUserFormValidationSchema;
