# mern-ecommerce

## 1. Introduction
### 1.1 Project Overview
This project is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The primary goal of this application is to provide users with an online shopping experience and enable administrators to manage products and orders efficiently.

### 1.2 Key Features
- User Registration and Authentication: Users can create accounts and log in to access personalized shopping experiences.
- Product Catalog: A comprehensive catalog of products is available for users to browse and search.
- Product Details: Users can view detailed information and images of individual products.
- Shopping Cart: Users can add products to their shopping carts and review the items they have selected.
- Order Placement: Users can proceed to checkout, select payment methods, and place their orders.
- Order Management (Admin): Administrators can manage and track orders, update their status, and view order details.
- User Roles: The system supports two roles, "customer" and "admin," each with distinct capabilities.

### 1.3 Technologies Used
- Frontend: React.js, Redux, React Bootstrap, Axios.
- Backend: Node.js, Express.js.
- Database: MongoDB.
- Payment Gateway Integration: Paypal, Stripe

### 1.4 Links

- Live Site URL: [Link](https://ned-mern-ecommerce-39b6ffde7c76.herokuapp.com)

## 2. Getting Started
### 2.1 Prerequisites
Before running the application, ensure you have the following installed on your system:
- Node.js and npm (Node Package Manager).
- MongoDB database.

### 2.2 Installation
1. Clone the repository from GitHub:
   ```
   git clone https://github.com/NedDinev/mern-ecommerce.git
   ```
2. Navigate to the project directory:
   ```
   cd mern-ecommerce
   ```
3. Install backend dependencies:
   ```
   cd backend
   ```
   ```
   npm install
   ```
5. Navigate to the frontend directory:
   ```
   cd frontend
   ```
6. Install frontend dependencies:
   ```
   npm install
   ```

### 2.3 Running the Application
1. Start the backend server (from the `backend` directory):
   ```
   npm start
   ```
2. Start the frontend development server (from the `frontend` directory):
   ```
   npm start
   ```
3. The application will be accessible at `http://localhost:3000` in your web browser.

### 2.4 Deployment
The application is deployed on Heroku using a MongoDB Atlas Cluster - [Link](https://ned-mern-ecommerce-39b6ffde7c76.herokuapp.com)
To deploy the application to a production environment, follow the specific deployment guidelines for the chosen hosting platform. This may involve setting up a production-ready database, configuring environment variables, and using a production web server.

## 3. Configuration
### 3.1 Environment Variables
Ensure that you have the necessary environment variables set. These variables are usually defined in a `.env` file. The project may require the following variables to be configured:
- `MONGODB_URI`: The connection string for your MongoDB database.
- `JWT_SECRET`: Secret key for JWT token generation and validation.
- *Add any other specific environment variables used in the project*.

### 3.2 Database Configuration
Make sure you have MongoDB installed and running on your system or server. Set the `MONGODB_URI` environment variable to point to your MongoDB database.

### 3.3 Payment Gateway Integration
*If the project uses a payment gateway for payment processing, provide details and instructions on how to integrate and configure the payment gateway.*

## 4. Project Structure
### 4.1 Frontend
The frontend directory contains all the client-side code for the application. Key files and directories include:
- `src/components`: Contains reusable React components used throughout the application.
- `src/pages`: Contains the main views of the application, such as the product catalog, product details, shopping cart, and checkout. Contains Axios API calls to interact with the backend.
- Implement reducers for state management.


### 4.2 Backend
The backend directory houses the server-side code for the application. Key files and directories include:
- `server.js`: Entry point of the Node.js and Express.js server.
- `routes`: Contains route handlers for different API endpoints, such as user authentication, product management, and order handling.
- `models`: Defines the data schema and models for MongoDB.

## 5. Usage
### 5.1 User Roles
- **Customer**: Customers can browse the product catalog, add products to their shopping carts, and place orders. They can also view their order history and order status.
- **Admin**: Administrators have additional capabilities. They can manage products, including creating, updating, and deleting products. Admins can also view all orders and update their status.

### 5.2 Registering a New User
1. Click on the "Register" link on the application's homepage.
2. Fill in the required details, such as name, email, and password.
3. Submit the form to create a new user account.

### 5.3 Browsing Products
1. On the application's homepage, you will find the product catalog showcasing various products.
2. You can use the search bar to search for specific products.

### 5.4 Adding Products to Cart
1. Click on the product to view its details.
2. On the product details page, click the "Add to Cart" button to add the product to your shopping cart.

### 5.5 Checkout and Payment
1. Navigate to your shopping cart by clicking the cart icon.
2. Review the items in your cart and click the "Proceed to Checkout" button.
3. Enter your shipping address and select a payment method.
4. Complete the payment process.

### 5.6 Managing Orders as Admin (Work in progress)
1. To access the admin dashboard, log in with an admin account.
2. In the dashboard, you can manage products, including creating, updating, and deleting products.
3. You can also view all orders and update their status as needed.

