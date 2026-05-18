import 'package:ticketman_admin/domain/entities/event.dart';
import 'package:ticketman_admin/domain/repositories/i_event_repository.dart';

class CreateEventUsecase {
  CreateEventUsecase(this.repo);

  final IEventRepository repo;

  Future<bool> call(params) async {
    return await repo.createEvent(params);
  }
}

class EventCreateParams {
  final String nome;
  final String descricao;
  final DateTime dataHora;
  final Address endereco;
  final Object valorEntrada;
  final String status = 'criado';
  final int ticketsVendidos = 0;

  EventCreateParams({
    required this.nome,
    required this.descricao,
    required this.dataHora,
    required this.endereco,
    required this.valorEntrada,
  });
}
