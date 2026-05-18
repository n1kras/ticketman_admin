class AuthDataSource {
  AuthDataSource();
  // TODO: IMPLEMENT SUPABASE CONNECTION
  // SupabaseClient get supabase => Supabase.instance.client;

  // TODO: IMPLEMENT USER CREDENTIALS
  // User? get currentUser => supabase.auth.currentUser;

  Future<void> signupWithEmailAndPassword({
    required String email,
    required String password,
  }) async {
    // TODO: IMPLEMENT REGISTER LOGIC
    throw UnimplementedError();
  }

  Future<void> loginWithEmailAndPassword({
    required String email,
    required String password,
  }) async {
    // TODO: IMPLEMENT LOGIN LOGIC
    throw UnimplementedError();
  }

  Future<void> signOut() async {
    // TODO: IMPLEMENT LOGOUT LOGIC
    throw UnimplementedError();
  }

  Future<void> sendPasswordResetEmail({required String email}) async {
    // TODO: IMPLEMENT PASSWORD RESET EMAIL LOGIC
    throw UnimplementedError();
  }

  Future<void> updatePassword({required String newPassword}) async {
    // TODO: IMPLEMENT REGISTER LOGIC
    throw UnimplementedError();
  }
}
