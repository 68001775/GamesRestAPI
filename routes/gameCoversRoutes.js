const express = require("express");
const router = express.Router();
const gameCoversController = require("../controllers/gameCoverController");
 
/**
 * @swagger
 * /api/gameCovers:
 *   get:
 *      tags:
 *         - game_covers
 *      summary: Get all gameCoverCovers - default limit of 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *          200:
 *            description: a list of gameCovers
 */
router.get("/", gameCoversController.getAllGameCovers);
 
/**
 * @swagger
 * /api/gameCovers/{id}:
 *   get:
 *      tags:
 *         - game_covers
 *      summary: Gets a specific game_cover based on id
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *          200:
 *            description: A single game_covers
 */
router.get("/:id", gameCoversController.getGameCoverById);
 
module.exports = router;