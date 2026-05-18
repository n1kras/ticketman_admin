import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';

class SignupUsecase {
  SignupUsecase(this.repo);

  IAuthRepository repo;

  Future<bool> call({
    required String email,
    required String password,
    required UserCreateParams params,
  }) {
    return repo.signupWithEmailAndPassword(
      email: email,
      password: password,
      userParams: params,
    );
  }
}

class UserCreateParams {
  final String nome;
  final String cpf;
  final DateTime dataNascimento;

  UserCreateParams({
    required this.nome,
    required this.cpf,
    required this.dataNascimento,
  });
}
