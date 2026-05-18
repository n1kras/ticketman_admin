import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class LogoutUsecase {
  LogoutUsecase(this.repo);

  IAuthRepository repo;

  Future<void> call() {
    return repo.logout();
  }
}
