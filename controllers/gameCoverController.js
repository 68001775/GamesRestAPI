const GameCover = require("../models/gameCover");
 
async function getAllGameCovers(req, res) {
    try {
        const { start = 0, limit = 50 } = req.query; //gameCover?start=50&limit=30
        const gameCovers = await GameCover.getAllGameCovers(start, limit);
        res.status(200).json(gameCovers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch gameCover." });
    }
}
 
async function getGameCoverById(req, res) {
    try {
        const gameCover = await GameCover.getGameCoverById(req.params.id); //gameCover/5
        if (gameCover) {
            res.status(200).json(gameCover);
        } else {
            res.status(404).json({ error: "gameCover not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch gameCover." });
    }
}
 
module.exports = { getAllGameCovers, getGameCoverById };