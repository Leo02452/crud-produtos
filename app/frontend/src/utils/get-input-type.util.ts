function getInputType(
  isObscured: boolean,
  isVisible: boolean,
  defaultType = 'text',
) {
  if (isObscured) {
    return isVisible ? 'text' : 'password';
  }
  return defaultType;
}

export default getInputType;
