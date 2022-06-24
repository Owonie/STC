import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(this.auth, provider);
  }

  logout() {
    signOut(this.auth);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user);
    });
  }
  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`provider error!`);
    }
  }
}

export default AuthService;
