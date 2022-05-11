const AbstractManagerUsers = require("./AbstractManagerUsers");

class UsersManager extends AbstractManagerUsers {
  static table = "users"; // modifier users

  insert(table) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname,lastname,email, mdp) values (?,?,?,?)`,
      [table.firstname, table.lastname, table.email, table.mdp]
    );
  }

  //   update(tableUsers) {
  //     return this.connection.query(
  //       `update ${UsersManager.tableUsers} set title = ? where id = ?`,
  //       [tableUsers.title, tableUsers.id]
  //     );
  //   }
}

module.exports = UsersManager;
