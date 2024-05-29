const express = require('express');
const cors = require('cors');
// Load environment variables from the .env file
require('dotenv').config({ path: './Config/.env' });
// Connect to MongoDB
require('./Config/db');



const app = express();

app.use(express.json());
app.use(cors());
const routes = require('./Routes/Routes')
app.use('/api',routes)

port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});