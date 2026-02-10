import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* REGISTER */
export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

/* LOGIN */
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
