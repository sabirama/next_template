import { connection } from "../../../src/database/connection";

export default function dropTable(tableName: string) {
    const query = `DROP TABLE IF EXISTS ${tableName};`;

    connection.query(query, (error) => {
        if (error) {
            console.error(`Error dropping table ${tableName}:`, error);
            return;
        }
        console.log(`Table ${tableName} dropped successfully.`);
    });
}