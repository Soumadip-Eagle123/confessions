# Confessions App 🕊️

A full-stack anonymous confession platform built with **Node.js, Express, SQLite, and vanilla HTML/CSS/JS**.

Users can:
- Register & log in
- Submit anonymous confessions
- View all confessions
- Request identity reveal
- Accept identity reveal (confession owner)

Sessions are handled using **express-session** and data is stored in **SQLite**.

---

## 🚀 Tech Stack

**Backend**
- Node.js
- Express
- SQLite (`sqlite3`, `sqlite`)
- express-session
- bcryptjs
- validator

**Frontend**
- HTML
- CSS
- Vanilla JavaScript (Fetch API)

---

## 📁 Project Structure

CONFESSIONS/
├── public/ # Frontend files
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── confessions.html
│ ├── style.css
│ └── auth.js
│
├── src/
│ ├── controllers/
│ ├── middlewares/
│ ├── routes/
│ ├── services/
│ ├── db.js
│ ├── server.js
│ └── database.db # SQLite database (gitignored)
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Setup & Run

### 1️⃣ Clone the repo
```bash
git clone <repo-url>
cd CONFESSIONS
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the server
bash
Copy code
npm run dev
Server runs at:

arduino
Copy code
http://localhost:3000
🌐 Routes Overview
Auth
POST /api/auth/register

POST /api/auth/login

GET /api/auth/logout

GET /api/auth/me

Confessions
GET /api/confessions

POST /api/confessions

POST /api/confessions/:id/request-reveal

PATCH /api/confessions/:id/accept-reveal

🔐 Notes
Sessions are cookie-based (httpOnly)

SQLite DB is stored locally (src/database.db)

Database file is not committed to Git

Frontend communicates via Fetch API with credentials included

🧠 Future Improvements
Admin moderation

Pagination for confessions

Email notifications for identity requests

Rate limiting

Deployment (Render / Railway / VPS)

👨‍💻 Author
Soumadip Sen

Built as a learning + production-style backend project.
