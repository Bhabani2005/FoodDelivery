

## 🦀 Cravecabs

**Cravecabs** is a food delivery web application that connects hungry users with delicious meals from nearby restaurants. Built using the MERN stack (MongoDB, Express.js, React, Node.js), Cravecabs makes it easy to browse menus, place orders, and track deliveries in real time.

## 🍽️ Features

* 🍔 **Order Food** – Add items to cart and place orders easily
* 📦 **Order Tracking** – Track your delivery in real-time
* 🧑‍🍳 **Restaurant Dashboard** – For restaurants to manage orders and update menus
* 🔐 **User Authentication** – Secure login/signup for users and restaurants
* 🧾 **Payment Integration** – (Planned) Support for online payments

## 🛠️ Tech Stack

**Frontend:**

* React
* React Router
* Tailwind CSS 
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (for authentication)

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/cravecabs.git
cd cravecabs
```


2. **Install dependencies**

```bash
cd client && npm install
cd ../server && npm install
```

3. **Run the app**
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
```
4. **Environment Variables**

Create a `.env` file in the `server/` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
## 🧠 Future Improvements

* Admin panel for managing users and restaurants
* Push notifications for order updates
* Reviews and ratings


