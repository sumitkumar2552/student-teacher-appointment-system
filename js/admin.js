import { db } from "./firebase.js";
import { addDoc, collection } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function addTeacher(name, dept, subject, email, uid) {
  await addDoc(collection(db, "teachers"), {
    uid,
    name,
    dept,
    subject,
    email,
    createdAt: new Date()
  });
}
