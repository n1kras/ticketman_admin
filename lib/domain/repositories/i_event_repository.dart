import 'package:ticketman_admin/domain/entities/event.dart';
import 'package:ticketman_admin/domain/usecases/event/create_event_usecase.dart';
import 'package:ticketman_admin/domain/usecases/event/update_event_usecase.dart';

abstract interface class IEventRepository {
  Future<bool> createEvent(EventCreateParams params);
  Future<Event> getEventById({required int id});
  Future<List<Event>> listEvents();

  Future<bool> updateEvent(EventUpdateParams params);
  Future<void> cancelEvent({required int id});

  Future<void> finishEvent({required int id});
}
