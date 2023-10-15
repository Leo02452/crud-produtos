import { ILoginDTO } from '../../../application/dto-and-entities/auth';

export type LoginFormProps = {
  onSubmit(data: ILoginDTO): void;
};
