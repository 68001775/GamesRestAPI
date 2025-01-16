const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");
/**
 * @swagger
 * /api/characters:
 *   get:
 *      tags:
 *         - characters
 *      summary: Get all characters - default limit of 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *          200:
 *            description: a list of characters
 */
router.get("/", characterController.getAllCharacters);
/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *      tags:
 *         - characters
 *      summary: Gets a specific character
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *          200:
 *            description: a list of characters
 */
router.get("/:id", characterController.getCharacterById);

module.exports = router;
