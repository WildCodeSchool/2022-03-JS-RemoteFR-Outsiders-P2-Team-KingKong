const express = require("express");

const { FavoriteController } = require("./controllers");

// const app = express();

const router = express.Router();

router.get("/api/favorite", FavoriteController.browse);
router.get("/api/favorite/:idcocktail", FavoriteController.read);
router.put("/api/favorite/:idcocktail", FavoriteController.edit);
router.post("/api/favorite", FavoriteController.add);
router.delete("/api/favorite/:idcocktail", FavoriteController.delete);

module.exports = router;
