const express = require("express");
const cors = require("cors");
const connectedDB = require("./db");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Server is running successfully"));

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

connectedDB().then(() => {
    app.listen(port, () => console.log(`\n\t App is running on port: ${port}`));
});