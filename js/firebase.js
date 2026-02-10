import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtOzb77lH6xlJgDq8z55qBrqXa5kd_nSM",
  authDomain: "student-teacher-booking-a16d4.firebaseapp.com",
  projectId: "student-teacher-booking-a16d4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
