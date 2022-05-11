const express = require("express");

const { UsersController, FavoriteController } = require("./controllers");

// const app = express();

const router = express.Router();

router.get("/api/favorite", FavoriteController.browse);
router.get("/api/favorite/:idcocktail", FavoriteController.read);
router.put("/api/favorite/:idcocktail", FavoriteController.edit);
router.post("/api/favorite", FavoriteController.add);
router.delete("/api/favorite/:idcocktail", FavoriteController.delete);

router.get("/api/users", UsersController.browse);
router.get("/api/users/:id", UsersController.read);
router.put("/api/users/:id", UsersController.edit);
router.post("/api/users", UsersController.add);
router.delete("/api/users/:id", UsersController.delete);

module.exports = router;
