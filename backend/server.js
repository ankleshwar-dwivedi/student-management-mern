const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes'); // ⬅️ Import auth routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);        // ⬅️ Add auth routes
app.use('/api/students', studentRoutes); // student routes stay here

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
