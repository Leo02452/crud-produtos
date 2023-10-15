import * as yup from 'yup';

const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().email('Fprmato de email inválido').required(),
  password: yup.string().required(),
});

export default LoginFormValidationSchema;
