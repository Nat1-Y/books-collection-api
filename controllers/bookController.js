const Book = require('../models/Book'); // Import the Book model

// Fetch all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// Add a new book
const addBook = async (req, res) => {
    const { title, author, isbn, publishedYear } = req.body;
  
    // Validate all fields
    if (!title || !author || !isbn || !publishedYear) {
      return res.status(400).json({ error: 'All fields (title, author, isbn, publishedYear) are required' });
    }
  
    try {
      const newBook = new Book({ title, author, isbn, publishedYear });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add book', details: error.message });
    }
  };
  

// Update a book by ID
const updateBook = async (req, res) => {
  const { title, author, isbn, publishedYear } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, isbn, publishedYear },
      { new: true, runValidators: true } // Return updated document and validate inputs
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(400).json({ error: 'Failed to update book', details: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

// Recommend a random book
const recommendBook = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json({ error: 'No books available for recommendations' });
    }

    const randomBook = books[Math.floor(Math.random() * books.length)];
    res.status(200).json(randomBook);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
};

// Mark a book as favorite
const markFavorite = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { favorite: true },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: `Book "${updatedBook.title}" marked as favorite`, book: updatedBook });
  } catch (error) {
    console.error('Error marking book as favorite:', error);
    res.status(500).json({ error: 'Failed to mark book as favorite' });
  }
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  recommendBook,
  markFavorite,
};
