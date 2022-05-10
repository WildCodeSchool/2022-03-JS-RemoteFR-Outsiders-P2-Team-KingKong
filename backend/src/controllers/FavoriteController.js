const models = require("../models");

class FavoriteController {
  static browse = (req, res) => {
    models.favorite
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.favorite
      .find(req.params.idcocktail) // modif
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const favorite = req.body;

    // TODO validations (length, format...)

    favorite.id = parseInt(req.params.idcocktail, 10); // modif

    models.favorite
      .update(favorite)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const favorite = req.body;

    // TODO validations (length, format...)

    models.favorite
      .insert(favorite)
      .then(([result]) => {
        res.status(201).send({ ...favorite, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.favorite
      .delete(req.params.idcocktail)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FavoriteController;
