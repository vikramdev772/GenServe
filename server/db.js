const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("\n\t Connected to MongoDB!\n"))
        .catch((error) => console.error("\nFailed to connect to DB ", error));
};

module.exports = connectDB;