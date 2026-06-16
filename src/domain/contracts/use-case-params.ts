import type { Address } from '../entities/event';

export interface LoginWithEmailAndPasswordParams {
  email: string;
  password: string;
}

export interface UserCreateParams {
  nome: string;
  cpf: string;
  dataNascimento: Date;
}

export interface SignupWithEmailAndPasswordParams
  extends LoginWithEmailAndPasswordParams {
  userParams: UserCreateParams;
}

export interface SendPasswordResetEmailParams {
  email: string;
}

export interface UpdatePasswordParams {
  password: string;
}

export interface GetEventByIdParams {
  id: number;
}

export interface EventCreateParams {
  nome: string;
  descricao: string;
  dataHora: Date;
  endereco: Address;
  valorEntrada: number;
}

export interface EventUpdateParams {
  id: number;
  nome: string;
  descricao: string;
  dataHora: Date;
  endereco: Address;
  valorEntrada: number;
}

export interface CancelEventParams {
  id: number;
}

export interface FinishEventParams {
  id: number;
}

export interface TicketCreateParams {
  comprador: string;
  dataCompra: Date;
  formaPagamento: string;
  status: string;
  qrCode: string;
  vendedor: string;
}

export interface CancelTicketParams {
  id: number;
}

export interface UseTicketParams {
  id: number;
}
