import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class LoginUsecase {
  LoginUsecase(this.repo);

  IAuthRepository repo;

  Future<bool> call({required String email, required String password}) {
    return repo.loginWithEmailAndPassword(email: email, password: password);
  }
}
