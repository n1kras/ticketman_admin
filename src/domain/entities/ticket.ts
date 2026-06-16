export interface Ticket {
  id: number;
  comprador: string;
  dataCompra: Date;
  formaPagamento: string;
  status: string;
  qrCode: string;
  vendedor: string;
}
