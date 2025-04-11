# 🎵 Innovators Hub Music

**Innovators Hub Music** is a sleek, full-featured music streaming web application built with **ReactJS** and powered by **Firebase**. It supports user authentication, profile customization, music playback, and includes an admin dashboard for album management.

## 🚀 Features

### 🔐 Authentication
- **Login**, **Register**, and **Forgot Password** functionality
- Secure Firebase Authentication integration
- Real-time session handling and state updates

### 👤 User Profile
- Update **Profile Picture** and **Personal Information**
- User data stored and retrieved from Firebase Firestore

### 🎧 Music Experience
- **Home Page** with a list of all uploaded albums
- Play songs using an integrated **Music Player**
- Responsive design for desktop and mobile devices

### 🧑‍💼 Admin Dashboard
- Separate routing for admin access
- Admins can **add new albums** and manage content
- Restricted access to admin features for regular users

## 🛠️ Tech Stack

- **Frontend:** ReactJS, React Router DOM, TailwindCSS (or your styling method)
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Other Tools:** Vite (optional), React Context API, Toast notifications

## 📁 Project Structure
```
src/ .
  ├── admin/  Admin page (e.g., AddAlbum)
  ├── auth/  Login, Register, Forgot Password
  ├── backend/  Firebase config
  ├── components/
  |    |── home/  Dashboard, AlbumDetails, SongList
  |    └── helpers/  Utility components like Spinner 
  ├── context/  Auth & Album context providers
  ├── user/  Profile & DeleteAccount
  ├── routes/  React Router config
  ├── App.jsx
  └── index.js
```

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/innovators-hub-music.git
cd innovators-hub-music
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a project on [Firebase Console](https://console.firebase.google.com/)
- Enable:
  - **Email/Password Authentication**
  - **Firestore Database**
  - **Firebase Storage**
- Replace the Firebase config in `src/backend/firebaseConfig.js`

### 4. Run the App

```bash
npm run dev
```

---

## 🔐 Admin Role Setup

1. In Firebase **Firestore**, locate the user’s document.
2. Add the following field:

```json
"role": "admin"
```

3. The user will now have access to the admin page to add albums.

---

## 📬 Contact

**Developed by [Jason David](https://github.com/your-username)**  
📧 Email: davidson4988@gmail.com
