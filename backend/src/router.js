const express = require("express");

const { ItemController,FavoriteController } = require("./controllers");


const router = express.Router();

router.get("/api/favorite", FavoriteController.browse);
router.get("/api/favorite/:idcocktail", FavoriteController.read);
router.put("/api/favorite/:idcocktail", FavoriteController.edit);
router.post("/api/favorite", FavoriteController.add);
router.delete("/api/favorite/:idcocktail", FavoriteController.delete);


module.exports = router;
