export interface IPasswordEncryptorProvider {
  encrypt(password: string): Promise<string>
}

export interface IPasswordValidatorProvider {
  validate(password: string, hashPassword: string): Promise<boolean>;
}
