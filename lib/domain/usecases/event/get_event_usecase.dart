import 'package:ticketman_admin/domain/entities/event.dart';
import 'package:ticketman_admin/domain/repositories/i_event_repository.dart';

class GetEventUsecase {
  GetEventUsecase(this.repo);

  final IEventRepository repo;

  Future<Event> call({required int id}) {
    return repo.getEventById(id: id);
  }
}
