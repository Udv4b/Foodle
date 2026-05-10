# Foodle 🍔 - MERN Food Delivery App

Foodle is a full-stack food delivery web application built using the MERN Stack with integrated Razorpay payment gateway.

Users can browse food items, add items to cart, place orders, and make secure online payments.

---

# 🚀 Features

- User Authentication (JWT)
- Add to Cart Functionality
- Food Categories
- Responsive UI
- Order Placement
- Razorpay Payment Gateway Integration
- Order Verification
- Cart Management
- MongoDB Database Integration
- REST API Architecture

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Razorpay API

---

# 📂 Project Structure

```bash
Foodle/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/udv4b/Foodle.git
cd foodle
```

---

# 📦 Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

## Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

RAZORPAY_API_KEY=your_razorpay_key_id
RAZORPAY_API_SECRET=your_razorpay_secret
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm run server
```

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 💳 Razorpay Integration

This project uses Razorpay payment gateway for secure online transactions.

### Features:
- Payment Order Creation
- Razorpay Checkout Popup
- Payment Signature Verification
- Payment Success Handling
- Cart Clearing After Successful Payment

---

# 🔐 Authentication

- JWT Token Based Authentication
- Protected Routes
- Secure API Requests

---

# 📡 API Endpoints

## User Routes

```bash
POST /api/user/register
POST /api/user/login
```

## Cart Routes

```bash
POST /api/cart/add
POST /api/cart/remove
POST /api/cart/get
```

## Order Routes

```bash
POST /api/order/place
POST /api/order/verify
POST /api/order/userorders
```

---

# 🌟 Future Improvements

- Admin Panel
- Live Order Tracking
- Email Notifications
- Google Login
- Stripe Payment Integration
- Food Search & Filter
- Ratings & Reviews

---

# 👨‍💻 Author

Developed by Udvab Biswas

---

# 📄 License

This project is licensed under the MIT License.
