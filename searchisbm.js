app.get('/promise/isbn/:isbn', (req, res) => {
  new Promise((resolve, reject) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    book ? resolve(book) : reject('Book not found');
  })
  .then(book => res.json(book))
  .catch(err => res.status(404).json({ message: err }));
});
