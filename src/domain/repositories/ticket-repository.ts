import type {
  CancelTicketParams,
  TicketCreateParams,
  UseTicketParams,
} from '../contracts/use-case-params';

export interface TicketRepository {
  createNewTicket(params: TicketCreateParams): Promise<boolean>;
  cancelTicket(params: CancelTicketParams): Promise<void>;
  useTicket(params: UseTicketParams): Promise<boolean>;
}
