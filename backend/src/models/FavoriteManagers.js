const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "favorite"; // modifier favorite

  insert(favorite) {
    return this.connection.query(
      `insert into ${FavoriteManager.table} (id,idcocktail) values (?,?)`,
      [favorite.id,favorite.idcocktail]
    );
  }

  update(favorite) {
    return this.connection.query(
      `update ${FavoriteManager.table} set title = ? where id = ?`,
      [favorite.title, favorite.id]
    );
  }
}

module.exports = FavoriteManager;
