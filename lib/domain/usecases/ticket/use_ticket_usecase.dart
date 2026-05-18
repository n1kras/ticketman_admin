import 'package:ticketman_admin/domain/repositories/i_ticket_repository.dart';

class UseTicketUsecase {
  UseTicketUsecase(this.repo);

  final ITicketRepository repo;

  Future<void> call({required int id}) {
    return repo.useTicket(id: id);
  }
}
