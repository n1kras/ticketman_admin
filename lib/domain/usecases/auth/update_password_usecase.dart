import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class UpdatePasswordUsecase {
  UpdatePasswordUsecase(this.repo);

  IAuthRepository repo;

  Future<bool> call({required String password}) {
    return repo.updatePassword(password: password);
  }
}
