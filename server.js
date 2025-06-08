// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// 1. Load environment variables
dotenv.config();

// 2. Initialize app
const app = express();

app.use(cors());
app.use(express.json()); // for parsing JSON requests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
