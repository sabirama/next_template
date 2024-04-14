import createTable from "../_components/createTable";
import dropTable from "../_components/dropTable";

const properties = [
  "username VARCHAR(50) UNIQUE NOT NULL",
  "email VARCHAR(50) UNIQUE NOT NULL",
  "password VARCHAR(50) NOT NULL",
  "first_name VARCHAR(50)",
  "middle_initial VARCHAR(2)",
  "last_name VARCHAR(50)",
  "age INT(3)",
  "phone INT(20)"
];

const table = "users"

export function createUser() {
  createTable(table, properties);
};

export function dropUser() {
  dropTable(table);
};
