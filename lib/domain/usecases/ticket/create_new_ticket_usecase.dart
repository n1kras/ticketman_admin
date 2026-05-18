import 'package:ticketman_admin/domain/repositories/i_ticket_repository.dart';

class CreateNewTicketUsecase {
  CreateNewTicketUsecase(this.repo);

  final ITicketRepository repo;

  Future<bool> call(TicketCreateParams params) {
    return repo.createNewTicket(params);
  }
}

class TicketCreateParams {
  final String comprador;
  final DateTime dataCompra;
  final String formaPagamento;
  final String status;
  final String qrCode;
  final String vendedor;

  TicketCreateParams({
    required this.comprador,
    required this.dataCompra,
    required this.formaPagamento,
    required this.status,
    required this.qrCode,
    required this.vendedor,
  });
}
