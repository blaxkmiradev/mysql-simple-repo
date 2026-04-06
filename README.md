🚀 MySQL Simple Node.js API

A simple full-stack backend starter using Node.js, Express, and MySQL.
Perfect for beginners learning CRUD operations and database integration.

---

📦 Tech Stack

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
2. Run the SQL file:

db/schema.sql

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

▶️ Run Server

node server.js

Server will start on:

http://localhost:3000

---

📡 API Endpoints

🔹 Get all users

GET /users

🔹 Create new user

POST /users

Body (JSON):

{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}

---

🧪 Example Response

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]

---

⚠️ Notes

- Change MySQL credentials in "config/db.js"
- Do NOT use plain passwords in production (use hashing like bcrypt)

---

📌 Future Improvements

- Authentication (JWT)
- MVC structure
- Validation
- Error handling
- Frontend integration

---

🤝 Contributing

Pull requests are welcome!

---

📄 License

MIT
