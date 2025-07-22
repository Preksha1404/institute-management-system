import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

const registerUser = (req, res) => {

    // Take user data from request body
    // Validate input data
    // Check if user already exists
    // Hash password
    // Save user to database
    // Return success response
    const { name, email, password, institute } = req.body;

    if (!name || !email || !password || !institute) {
        return res.status(400).json({ message: "All fields are required" });
    }

    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = bcrypt.hashSync(password, 10);

            const newUser = User.create({
                name,
                email,
                password: hashedPassword,
                institute
            });

            return newUser;
        }

        )
        .then(savedUser => {
            res.status(201).json({ message: "User registered successfully", user: savedUser });
        })
        .catch(err => {
            console.error("Error registering user:", err);
            res.status(500).json({ message: "Internal server error" });
        }
        );
}

export { registerUser };