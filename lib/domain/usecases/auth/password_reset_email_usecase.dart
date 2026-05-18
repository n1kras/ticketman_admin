import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class PasswordResetEmailUsecase {
  PasswordResetEmailUsecase(this.repo);

  IAuthRepository repo;

  Future<bool> call({required String email}) {
    return repo.sendPasswordResetEmail(email: email);
  }
}
