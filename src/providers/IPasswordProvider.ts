export interface IPasswordEncryptorProvider {
  encrypt(password: string): Promise<string>
}
