const User = require("../models/userModel");
const CreateError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return next(new CreateError("User already exists", 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
            expiresIn: "90d",
        });

        res.status(201).json({
            status: "success",
            message: "User registered successfully",
            token,
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return next(new CreateError("User not found!", 404));
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return next(new CreateError("Invalid email or password", 401));
        }
        const token = jwt.sign({ _id: user._id }, "secretkey123", {
            expiresIn: "90d",
        });
        res.status(200).json({
            status: "success",
            token,
            message: "Logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};
