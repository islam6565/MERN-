const express = require('express'); // Import express




const app = express(); // Create an instance of express
require("dotenv").config(); 
const cors =require('cors');

const db_connect=require("./db_connect")
db_connect();
app.use(cors());

app.use(express.json());
app.use("/user", require("./routes/user"))

// Define a port
const PORT = process.env.PORT  // Use the port from environment variables or default to 5000

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting the server:", err); // Log any error that occurs
    } else {
        console.log(`Server is running on port ${PORT}`); // Log success message
    }
});