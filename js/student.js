import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* Get teachers */
export async function getTeachers() {
  const snap = await getDocs(collection(db, "teachers"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/* Book appointment */
export async function bookAppointment(
  student,
  teacher,
  purpose,
  time
) {
  await addDoc(collection(db, "appointments"), {
    studentUid: student.uid,
    studentEmail: student.email,

    teacherUid: teacher.uid,
    teacherName: teacher.name,

    purpose,
    time,
    status: "pending",
    createdAt: new Date()
  });
}

/* Student appointment history */
export async function getStudentAppointments(uid) {
  const q = query(
    collection(db, "appointments"),
    where("studentUid", "==", uid)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
