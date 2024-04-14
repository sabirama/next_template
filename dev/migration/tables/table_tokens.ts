import createTable from "../_components/createTable";
import dropTable from "../_components/dropTable";

const properties = [
    "token VARCHAR(100) UNIQUE NOT NULL",
    "tokenable_id INT(50) NOT NULL",
];

const table = "tokens";

export function createToken() {
    createTable(table, properties);
};

export function dropToken() {
    dropTable(table);
};
