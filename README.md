Full-Stack E-Commerce App

Overview
This is a full-stack e-commerce application built using Node.js, Express, MongoDB (backend), and React.js (frontend). Users can register, log in, browse products, add them to a cart, and complete checkout.

Features
User authentication (Register/Login with JWT)  
CRUD operations for products  
Shopping cart functionality  
Checkout with user details  
State management using React Context  
Responsive frontend using React.js  


Frontend: React.js, React Context API, CSS  
Backend: Node.js, Express.js, MongoDB  
Database: MongoDB (via Mongoose)  
Authentication: JWT (JSON Web Tokens)  

For running the program, you need to first run the backend.
Run the backend with (should be in the root folder): npx nodemon index.js

Following that you need to run the frontend.
Run the frontend with (should be in the frontend folder): npm start

Following are the API Endpoints:
1) POST		/api/auth/register	Register a new user
2) POST		/api/auth/login		Login and get JWT
3) GET		/api/products		Fetch all products
4) POST		/api/cart		Add product to cart
5) DELETE	/api/cart/:id		Remove from cart
