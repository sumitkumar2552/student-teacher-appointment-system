# 🎓 Student–Teacher Appointment Booking System

A full-stack web application that allows students to book appointments with teachers, teachers to approve or reject appointments, and admins to manage teachers. The project is built using HTML, CSS, JavaScript, and Firebase with a modern, professional UI.

---

## 🚀 Live Demo
👉 https://student-teacher-appointment-system.vercel.app/

---

## ✨ Features

### 🔐 Authentication
- Firebase Email & Password Authentication
- Secure login and registration
- Role-based redirection after login

### 👥 User Roles
- **Admin** – Manages teachers
- **Teacher** – Approves or rejects appointments
- **Student** – Books appointments and tracks status

Role detection is handled using email-based logic:
- Admin: predefined admin email
- Teacher: email ending with `@teacher.com`
- Student: all other registered users

---

## 🧑‍🎓 Student Dashboard
- View list of available teachers
- Select a teacher and book an appointment
- Provide purpose and preferred time
- View appointment history
- Track appointment status:
  - Pending
  - Approved
  - Rejected
- Logout securely

---

## 👨‍🏫 Teacher Dashboard
- View only assigned appointments
- See student details and appointment purpose
- Approve or reject appointments
- Appointment status updates reflected to students
- Logout functionality

---

## 🧑‍💼 Admin Dashboard
- Add teachers with:
  - Name
  - Department
  - Subject
  - Email
  - UID
- Manage system configuration
- Secure logout

---

## 🎨 UI / UX
- Modern dark theme
- Card-based layout
- Responsive structure
- Status badges with color indicators
- Navbar with logout option on every dashboard
- Hover effects and pointer cursors for better UX

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (ES Modules)

### Backend / Services
- Firebase Authentication
- Firebase Firestore

### Deployment
- Vercel (Frontend Hosting)
- Firebase (Backend Services)

---


---

## ⚙️ Setup & Run Locally

1. Clone the repository:
```bash
git clone https://github.com/sumitkumar2552/student-teacher-appointment-system.git


