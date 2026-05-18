import 'package:ticketman_admin/domain/repositories/i_ticket_repository.dart';

class CancelTicketUsecase {
  CancelTicketUsecase(this.repo);

  final ITicketRepository repo;

  Future<void> call({required int id}) {
    return repo.cancelTicket(id: id);
  }
}
