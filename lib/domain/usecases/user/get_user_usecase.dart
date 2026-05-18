import 'package:ticketman_admin/domain/entities/user.dart';
import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class GetUserUsecase {
  GetUserUsecase(this.repo);

  final IAuthRepository repo;

  Future<User> call() async {
    return repo.userCredentials;
  }
}
