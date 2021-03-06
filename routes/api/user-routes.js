const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// set up GET all and POST at api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up GET one, PUT, and DELETE at api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// friend routes
// not sure how to do these controllers

module.exports = router;