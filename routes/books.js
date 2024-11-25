const express = require('express');
const router = express.Router();
const { getBooks, addBook, updateBook, deleteBook, recommendBook, markFavorite } = require('../controllers/bookController');

router.get('/', getBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/recommendations', recommendBook);
router.post('/favorite/:id', markFavorite);

module.exports = router;