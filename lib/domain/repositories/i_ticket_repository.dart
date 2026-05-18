import 'package:ticketman_admin/domain/usecases/ticket/create_new_ticket_usecase.dart';

abstract interface class ITicketRepository {
  Future<bool> createNewTicket(TicketCreateParams params);
  Future<void> cancelTicket({required int id});
  Future<bool> useTicket({required int id});
}
