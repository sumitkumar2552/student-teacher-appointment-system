import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function getTeacherAppointments(uid) {
  const q = query(
    collection(db, "appointments"),
    where("teacherUid", "==", uid)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function updateAppointmentStatus(id, status) {
  await updateDoc(doc(db, "appointments", id), { status });
}
