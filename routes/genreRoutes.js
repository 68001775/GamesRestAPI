const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");
/**
 * @swagger
 * /api/genres:
 *   get:
 *      tags:
 *         - genres
 *      summary: Get all genres - default limit of 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *          200:
 *            description: a list of genres
 */
router.get("/", genreController.getAllGenres);
/**
 * @swagger
 * /api/genres/{genre_id}:
 *   get:
 *      tags:
 *         - genres
 *      summary: Gets a specific genre
 *      parameters:
 *          - in: path
 *            name: genre_id
 *      responses:
 *          200:
 *            description: a list of genres
 */
router.get("/:id", genreController.getGenreById);

module.exports = router;
