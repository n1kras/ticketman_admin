import type { User } from '../entities/user';
import type {
  LoginWithEmailAndPasswordParams,
  SendPasswordResetEmailParams,
  SignupWithEmailAndPasswordParams,
  UpdatePasswordParams,
} from '../contracts/use-case-params';

export interface AuthRepository {
  loginWithEmailAndPassword(
    params: LoginWithEmailAndPasswordParams,
  ): Promise<boolean>;
  signupWithEmailAndPassword(
    params: SignupWithEmailAndPasswordParams,
  ): Promise<boolean>;
  logout(): Promise<void>;
  sendPasswordResetEmail(
    params: SendPasswordResetEmailParams,
  ): Promise<boolean>;
  updatePassword(params: UpdatePasswordParams): Promise<boolean>;
  readonly userCredentials: User;
}
