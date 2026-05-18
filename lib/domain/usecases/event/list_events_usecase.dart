import 'package:ticketman_admin/domain/entities/event.dart';
import 'package:ticketman_admin/domain/repositories/i_event_repository.dart';

class ListEventsUsecase {
  ListEventsUsecase(this.repo);

  final IEventRepository repo;

  Future<List<Event>> listEvents() {
    return repo.listEvents();
  }
}
