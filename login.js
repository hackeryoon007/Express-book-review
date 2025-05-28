app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  res.json(user ? { message: 'Login successful' } : { message: 'Invalid credentials' });
});
