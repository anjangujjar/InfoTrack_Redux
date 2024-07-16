const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

let users = [];

// Signup endpoint
app.post('/api/signup', (req, res) => {
  const { name, phoneNumber, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const user = { name, phoneNumber, email, password };
  users.push(user);
  res.status(201).json(user);
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
