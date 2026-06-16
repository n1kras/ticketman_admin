export interface Address {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;
  referencia: string;
}

export interface Event {
  id: number;
  nome: string;
  descricao: string;
  dataHora: Date;
  endereco: Address;
  status: string;
  valorEntrada: unknown;
  ticketsVendidos: number;
}
