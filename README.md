Project Documentation
markdown
Copy
Edit
# 📚 Book Review Web Application

A RESTful web application to manage book details, user registration/login, and book reviews. This project was built using **Node.js** and **Express.js**.

---

## 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/book-review-app.git
   cd book-review-app
Install Dependencies

bash
Copy
Edit
npm install
Start the Server

bash
Copy
Edit
node server.js
Server will run on: http://localhost:3000

📂 API Endpoints
📖 Book APIs
GET /books – Get all books

GET /books/isbn/:isbn – Get book by ISBN

GET /books/author/:author – Get books by Author

GET /books/title/:title – Get books by Title

GET /books/:isbn/review – Get review of a book

PUT /books/:isbn/review – Add or modify a review

DELETE /books/:isbn/review – Delete a review

🙍‍♂️ User APIs
POST /register – Register a new user

POST /login – Login as a user

🔄 Async/Promise Tasks
GET /async/books – Get books using async callback

GET /promise/isbn/:isbn – Search by ISBN using Promises

