# 🌕 mini full-stack

A **mini full-stack web application** built with **React (Vite)** for the frontend and **Node.js + Express.js** for the backend.

This project demonstrates **basic authentication** (register, login, dashboard) and serves as a foundation for learning how frontend and backend interact in a modern JavaScript stack.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React (Vite)
- React Router
- Axios
- Basic CSS styling

### ⚙️ Backend
- Node.js
- Express.js
- dotenv (for environment variables)

---

## 📂 Project Structure

```
pinoctober-portal/
│
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    ├── package.json
    └── vite.config.js
```

---

## 🧩 Features

- 🧍 User registration and login  
- 🔐 Authentication token saved in `localStorage`  
- 📋 Dashboard that shows the current user and their role  
- 🚪 Logout functionality  
- 💾 Simple backend with Express routes (`/api/auth/register`, `/api/auth/login`)

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/BechafiYasmine/pinoctober-portal.git
cd pinoctober-portal
```

### 2. Run the backend
```bash
cd backend
npm install
npm start
```
> The backend runs by default on **http://localhost:5000**

### 3. Run the frontend
```bash
cd ../frontend
npm install
npm run dev
```
> The frontend runs by default on **http://localhost:5173**

---

## 🌟 Screens

| Page | Description |
|------|--------------|
| Home | Simple welcome page |
| Register | Create a new user |
| Login | Authenticate existing user |
| Dashboard | Display logged-in user info and logout |

---

## 🧠 Learning Goals

This mini project is ideal for beginners who want to:
- Understand how **frontend & backend** communicate
- Learn how to **handle authentication** in React
- Practice **Express.js routing** and REST API basics

---

## 🧑‍💻 Author

**👤 [Bechafi Yasmine](https://github.com/BechafiYasmine)**  
Full Stack & AI Enthusiast 💡

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
