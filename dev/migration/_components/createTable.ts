import { connection } from "../../../src/database/connection";

export const timestamps = `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`;

export default function createTable(table: string, properties: Array<string>) {
  const query = `
        CREATE TABLE ${table} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            ${properties.join(",\n")},
            ${timestamps}
        );`;

  connection.query(query, (error) => {
    if (error) {
      console.error(`Error creating table ${table}:`, error);
      return;
    }
    console.log(`Table ${table} created.`);
  });
}
