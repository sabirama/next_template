import createTable from "../_components/createTable";
import dropTable from "../_components/dropTable";

const properties = [
    "token VARCHAR(100) NOT NULL",
    "type VARCHAR(50) NOT NULL",
    "owner_id INT(20) UNIQUE NOT NULL"
];

const table = "access_keys"

export function createAccessKeys() {
    createTable(table, properties);
};

export function dropAccessKeys() {
    dropTable(table);
};
