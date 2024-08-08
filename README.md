# Inventory and Sales Management System: Setup and Run Guide

This guide provides step-by-step instructions to set up and run the Inventory and Sales Management System, built using Node.js, Express, and MongoDB.

# Prerequisites
Before setting up the application, make sure you have the following installed on your machine:

Node.js (v14 or above)
npm (Node Package Manager, comes with Node.js)
MongoDB (locally or through a cloud service like MongoDB Atlas)

# 1. Clone the Repository

git clone https://github.com/your-repo/inventory-sales-system.git
cd inventory-sales-system

# 2. Install Dependencies

Navigate to the project directory and install the necessary npm packages.
npm install

# 3. Configure Environment Variables

Create a .env file in the root of the project and add your environment variables. Here is a sample configuration:

PORT: The port on which your server will run.
DB_URL: The MongoDB connection string (adjust this if you're using MongoDB Atlas or a different setup).

# 4. Set Up MongoDB

Make sure your MongoDB instance is running. If you're running MongoDB locally, it should be available on the default port (27017). If you're using MongoDB Atlas, make sure your connection string is correctly configured in the .env file.

# 5. Start the Application

To start the server, use the following command:
npm run dev

# Access the API

Once the server is running, you can access the API at http://localhost:3000 (or whichever port you specified).

# 7. API Endpoints

Here are some of the key API endpoints you can use:

Inventory Items

Add Item: POST /api/inventory/add
Get All Items: GET /api/inventory
Update Item: PUT /api/inventory/:id
Delete Item: DELETE /api/inventory/:id

Bills

Create Bill: POST /api/bills/create
Get All Bills: GET /api/bills
Get Bill by ID: GET /api/bills/:id

# Conclusion

You have successfully set up and run the Inventory and Sales Management System. You can now interact with the API, add inventory items, create bills, and manage your shop's inventory efficiently.

If you encounter any issues, check your MongoDB connection and ensure all dependencies are installed correctly.