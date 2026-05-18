import 'package:ticketman_admin/domain/repositories/i_event_repository.dart';

class FinishEventUsecase {
  FinishEventUsecase(this.repo);

  final IEventRepository repo;

  Future<void> call({required int id}) async {
    return await repo.finishEvent(id: id);
  }
}
