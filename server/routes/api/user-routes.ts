const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    saveBook,
    deleteBook,
    login
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

// using the authMiddleware to protect the route that returns the user's information + verified token
router.route('/').post(createUser).put(authMiddleware, saveBook);
// login
router.route('/login').post(login);
// get user by id
router.route('/me').get(authMiddleware, getSingleUser);
// delete a book by id
router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;