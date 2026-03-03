
var express = require("express");
var app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/url", (req, res, next) => {
    res.json(["To","jest","proste","REST","API"]);
});

// POST endpoint for user login
app.post("/login", (req, res, next) => {
    const { username, password } = req.body;
    
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }
    
    // In a real application, you would validate credentials against a database
    // For this example, we'll use a simple hardcoded check
    if (username === "admin" && password === "password123") {
        return res.json({ 
            success: true, 
            message: "Login successful",
            user: { username: username, role: "admin" }
        });
    } else {
        return res.status(401).json({ 
            success: false, 
            error: "Invalid credentials" 
        });
    }
});

// POST endpoint for user registration
app.post("/register", (req, res, next) => {
    const { username, password, email } = req.body;
    
    // Basic validation
    if (!username || !password || !email) {
        return res.status(400).json({ 
            error: "Username, password, and email are required" 
        });
    }
    
    // In a real application, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Store user in database
    
    // For this example, we'll return a success response
    return res.json({ 
        success: true, 
        message: "User registered successfully",
        user: { 
            username: username, 
            email: email,
            id: Date.now() // Simulated user ID
        }
    });
});

app.listen(3003, () => {
    console.log("Server running on port 3003");
});