const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST at api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// set up GET one, PUT, and DELETE at api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// set up GET one, PUT, and DELETE at api/thoughts/:id/reactions
router
    .route('/:id/reactions')
    .post(addReaction)
    .delete(removeReaction);
