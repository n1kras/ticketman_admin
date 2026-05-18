import 'package:ticketman_admin/domain/entities/user.dart';
import 'package:ticketman_admin/domain/usecases/auth/signup_usecase.dart';

abstract interface class IAuthRepository {
  Future<bool> loginWithEmailAndPassword({
    required String email,
    required String password,
  });

  Future<bool> signupWithEmailAndPassword({
    required String email,
    required String password,
    required UserCreateParams userParams,
  });

  Future<void> logout();

  Future<bool> sendPasswordResetEmail({required String email});

  Future<bool> updatePassword({required String password});

  User get userCredentials;
}
