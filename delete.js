app.delete('/books/:isbn/review', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book && book.review) {
    delete book.review;
    res.json({ message: 'Review deleted' });
  } else {
    res.json({ message: 'Review not found' });
  }
});
