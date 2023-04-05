import express, { Request, Response } from 'express';
import apiRouter from "./routes/api";
import { initializeDb } from "./database/database";

require("dotenv").config();
const app = express();

// Rendering EJS templates
app.set("view engine", "ejs");
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

// Connect to the database
initializeDb().then(() => {
    console.log("Successfully connected to database!");
}).catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1); // Exit the process if the database connection fails
});

// Redirect requests to the root path to the /api/url path
app.get("/", (req, res) => {
    res.redirect("/api/url")
})

// Route requests starting with /api to the apiRouter
app.use("/api", apiRouter);
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});



