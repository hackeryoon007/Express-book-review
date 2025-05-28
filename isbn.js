app.get('/books/isbn/:isbn', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  res.json(book || { message: 'Book not found' });
});
