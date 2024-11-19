require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());  

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};
connectDB();


app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  
  if (email === 'user@example.com' && password === 'password') {
   
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h', 
    });

    res.json({ token }); 
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.get('/api/protected', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'This is a protected route', user: decoded });
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
});


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
