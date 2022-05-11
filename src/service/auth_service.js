import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider); // class로 만들어줬기때문에 return해줌
  }

  onAuthChange(onUserChanged) {                         // onUserChanged는 임의의 익명함수
      firebase.auth().onAuthStateChanged(user => {
          onUserChanged(user);
      });
  }

  logout() {
      firebase.auth().signOut();
  }
}
export default AuthService;
