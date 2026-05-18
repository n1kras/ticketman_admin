import 'package:ticketman_admin/domain/entities/event.dart';
import 'package:ticketman_admin/domain/repositories/i_event_repository.dart';

class UpdateEventUsecase {
  UpdateEventUsecase(this.repo);

  final IEventRepository repo;

  Future<bool> call(EventUpdateParams params) {
    return repo.updateEvent(params);
  }
}

class EventUpdateParams {
  final int id;
  final String nome;
  final String descricao;
  final DateTime dataHora;
  final Address endereco;
  final Object valorEntrada;

  EventUpdateParams({
    required this.id,
    required this.nome,
    required this.descricao,
    required this.dataHora,
    required this.endereco,
    required this.valorEntrada,
  });
}
