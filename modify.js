app.put('/books/:isbn/review', (req, res) => {
  const { username, review } = req.body;
  let book = books.find(b => b.isbn === req.params.isbn);
  if (book) {
    book.review = review;
    res.json({ message: 'Review added/modified' });
  } else {
    res.json({ message: 'Book not found' });
  }
});
