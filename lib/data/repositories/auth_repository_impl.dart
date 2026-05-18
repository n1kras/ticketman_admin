import 'package:ticketman_admin/data/data_sources/auth_data_source.dart';
import 'package:ticketman_admin/domain/entities/user.dart';
import 'package:ticketman_admin/domain/repositories/i_auth_repository.dart';
import 'package:ticketman_admin/domain/usecases/auth/signup_usecase.dart';

class AuthRepositoryImpl implements IAuthRepository {
  AuthRepositoryImpl(this.dataSource);

  final AuthDataSource dataSource;

  @override
  Future<bool> loginWithEmailAndPassword({
    required String email,
    required String password,
  }) async {
    try {
      await dataSource.loginWithEmailAndPassword(
        email: email,
        password: password,
      );
      return true;
    } catch (e) {
      throw Exception("Erro ao fazer login: $e");
    }
  }

  @override
  Future<void> logout() async {
    try {
      await dataSource.signOut();
    } catch (e) {
      throw Exception('Erro ao sair: $e');
    }
  }

  @override
  Future<bool> sendPasswordResetEmail({required String email}) async {
    try {
      await dataSource.sendPasswordResetEmail(email: email);
      return true;
    } catch (e) {
      throw Exception('Erro ao enviar email: $e');
    }
  }

  @override
  Future<bool> signupWithEmailAndPassword({
    required String email,
    required String password,
    required UserCreateParams userParams,
  }) async {
    try {
      await dataSource.signupWithEmailAndPassword(
        email: email,
        password: password,
      );
      return true;
    } catch (e) {
      throw Exception('Erro ao fazer cadastro: $e');
    }
  }

  @override
  Future<bool> updatePassword({required String password}) async {
    try {
      await dataSource.updatePassword(newPassword: password);
      return true;
    } catch (e) {
      throw Exception('Erro ao atualizar senha: $e');
    }
  }

  @override
  // TODO: implement userCredentials
  User get userCredentials => throw UnimplementedError();
}
