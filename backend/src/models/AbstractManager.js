class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table; // favorite
   // this.tableUsers = tableUsers; // users
  }

  find(idcocktail) {
    return this.connection.query(
      `select * from  ${this.table} where idcocktail = ?`,
      [idcocktail]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(idcocktail) {
    return this.connection.query(
      `delete from ${this.table} where idcocktail = ?`,
      [idcocktail]
    );
  }
  //---------------
  // find(id) {
  //   return this.connection.query(
  //     `select * from  ${this.tableUsers} where id = ?`,
  //     [id]
  //   );
  // }

  // findAll() {
  //   return this.connection.query(`select * from  ${this.tableUsers}`);
  // }

  // delete(id) {
  //   return this.connection.query(
  //     `delete from ${this.tableUsers} where id = ?`,
  //     [id]
  //   );
  // }
}

module.exports = AbstractManager;
