const express = require("express");
const router = express.Router();
const websiteController = require("../controllers/websiteController");
/**
 * @swagger
 * /api/websites:
 *   get:
 *      tags:
 *         - websites
 *      summary: Get all websites - default limit of 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *          200:
 *            description: a list of websites
 */
router.get("/", websiteController.getAllWebsites);
/**
 * @swagger
 * /api/websites/{id}:
 *   get:
 *      tags:
 *         - websites
 *      summary: Gets a specific website
 *      parameters:
 *          - in: path
 *            name: website_id
 *      responses:
 *          200:
 *            description: a list of websites
 */
router.get("/:id", websiteController.getWebsiteById);

module.exports = router;
