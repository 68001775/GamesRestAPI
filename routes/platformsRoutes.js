const express = require("express");
const router = express.Router();
const plaformController = require("../controllers/platformController");
/**
 * @swagger
 * /api/platforms:
 *   get:
 *      tags:
 *         - platforms
 *      summary: Get all platforms - default limit of 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *          200:
 *            description: a list of platforms
 */
router.get("/", plaformController.getAllPlatforms);
/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *      tags:
 *         - platforms
 *      summary: Gets a specific platform
 *      parameters:
 *          - in: path
 *            name: platform_id
 *      responses:
 *          200:
 *            description: a list of platforms
 */
router.get("/:id", plaformController.getPlatformById);

module.exports = router;
