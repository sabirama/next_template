import createTable from "../_components/createTable";
import dropTable from "../_components/dropTable";

const properties = [
    "name VARCHAR(50) UNIQUE NOT NULL",
    "details TEXT NOT NULL",
    "tag TEXT"
];

const table = "items"

export function createItems() {
    createTable(table, properties);
};

export function dropItems() {
    dropTable(table);
};
