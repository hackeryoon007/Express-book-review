app.get('/async/books', async (req, res) => {
  setTimeout(() => {
    res.json(books);
  }, 1000); // Simulate async
});
