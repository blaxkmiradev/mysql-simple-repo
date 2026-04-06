🚀 MySQL Simple Node.js API

«Simple backend starter using Node.js, Express, and MySQL (CRUD ready)»

---

📌 Overview

This project is a minimal REST API built with Node.js and MySQL.
It is designed for beginners to understand how backend, database, and API work together.

---

🧰 Tech Stack

- Node.js
- Express
- MySQL

---

📁 Project Structure

mysql-simple-repo/
│
├── db/
│   └── schema.sql
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── README.md

---

🗄️ Database Setup

1. Open MySQL
2. Import schema file:

source db/schema.sql;

This will:

- Create database "app_db"
- Create "users" table
- Insert sample data

---

⚙️ Installation

git clone https://github.com/your-username/mysql-simple-repo.git
cd mysql-simple-repo
npm install

---

▶️ Run the App

node server.js

Server will run on:

http://localhost:3000

---

📡 API Endpoints

GET /users

Get all users

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]

---

POST /users

Create a new user

Request Body:

{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}

Response:

{
  "message": "User added",
  "id": 2
}

---

⚠️ Important Notes

- Update MySQL credentials in "config/db.js"
- Never store plain passwords in production
- Use environment variables for sensitive data

---

🚀 Future Improvements

- JWT Authentication
- MVC Architecture
- Input validation
- Error handling middleware
- Docker support

---

🤝 Contributing

Feel free to fork this repo and submit pull requests.

---

📄 License

MIT License
