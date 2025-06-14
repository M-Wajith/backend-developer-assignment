# 🚀 Backend Developer Assignment - Future Code Technology

This is a RESTful API built using **Node.js**, **Express**, and **MongoDB** as part of the backend developer assignment for Future Code Technology.

---

## 📌 Features

- 🧑 User Registration & Login (No Auth/Token needed)
- 🛒 CRUD operations for Products
- ✅ Tested with Postman
- 📦 MongoDB (via Mongoose)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)

---

## 📂 Project Structure

```
config/             # DB and environment setup
controllers/        # Route logic
models/             # Mongoose schemas
postman/            # Postman test screenshots
routes/             # API route handlers
.env                # Environment variables
package.json
package-lock.json
server.js           # Main server file
```

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local instance or MongoDB Atlas)

### 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/M-Wajith/backend-developer-assignment.git
cd backend-developer-assignment
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file in root directory and add:**

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. **Start the server:**

```bash
npm start
```

The server will start at `http://localhost:5000` (or as defined in `.env`).

---

## 📡 API Endpoints

### 👤 User Routes

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login    | User login          |

### 📦 Product Routes

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| POST   | /api/products     | Create a new product |
| GET    | /api/products     | Get all products     |
| GET    | /api/products/:id | Get product by ID    |
| PUT    | /api/products/:id | Update a product     |
| DELETE | /api/products/:id | Delete a product     |

---

## 🧪 Testing with Postman

Below are screenshots showing tested API requests and responses:

| Action            | Screenshot                                          |
| ----------------- | --------------------------------------------------- |
| User Registration | ![User Registration](postman/user_registration.png) |
| User Login        | ![User Login](postman/user_login.png)               |
| Create Product    | ![Create Product](postman/create_product.png)       |
| Get All Products  | ![Get All Products](postman/get_all_products.png)   |
| Get Product By ID | ![Get Product By ID](postman/get_product_by_id.png) |
| Update Product    | ![Update Product](postman/update_product.png)       |
| Delete Product    | ![Delete Product](postman/delete_product.png)       |

---

## 📃 License

This project is for assignment/demo purposes only.
