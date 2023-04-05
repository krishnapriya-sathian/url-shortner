"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const database_1 = require("./database/database");
require("dotenv").config();
const app = (0, express_1.default)();
app.set("view engine", "ejs");
console.log(process.env.MONGO_URL);
app.use(express_1.default.urlencoded({ extended: false }));
const port = 5000;
(0, database_1.initializeDb)().then(() => {
    console.log("Successfully connected to database!");
}).catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1); // Exit the process if the database connection fails
});
app.get('/', (req, res) => {
    res.render('index');
});
app.use("/api", api_1.default);
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
