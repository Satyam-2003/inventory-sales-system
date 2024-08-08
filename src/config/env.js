import dotenv from "dotenv";

dotenv.config({
    path: "./env",
  });

module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/inventory'
};
