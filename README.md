# Books Collection API 📚

## Description
A **RESTful API** for managing a collection of books. This API allows users to perform CRUD operations, validates input data, and includes creative custom features such as book recommendations and marking books as favorites.

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete books in the collection.
- **Data Validation**: Ensures required fields (`title`, `author`, `isbn`, `publishedYear`) are present and valid.
- **Custom Endpoints**: 
  - `/books/recommendations`: Suggests a random book from the collection.
  - `/books/favorite/:id`: Marks a specific book as a favorite.

---

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Lightweight web framework for routing and middleware.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: Manage environment variables securely.

---

## Installation and Setup

### Prerequisites
- Node.js installed.
- MongoDB Atlas or a local MongoDB database.
- Git installed on your system.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd books-api
# books-collection-api
