import mysql2 from "mysql2";

let error = "Options {id} and {where} cannot be used on the same query."

const dbQuerry = (query: string, data: object = null, callback: Function = null) => {

    return new Promise((resolve, reject) => {

        connection.query(query, data, (error, results) => {

            if (error) {

                reject(error);

            } else {

                resolve(results);
            }
        });
    });
}

export const connection = mysql2.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "nextdb",
    port: parseInt(process.env.DB_PORT, 10) || 3306
})

export const select = async function (options: { table: string, select?: Array<string>, where?: object, pageSize?: number, page?: number }, callback: Function = null) {

    let selectClause = "*";

    if (options.select) {

        selectClause = options.select.join(', ');
    }

    const whereClause = options.where ? ` WHERE ${Object.entries(options.where).map(([key, value]) => `${key} = ${connection.escape(value)}`).join(" AND ")}` : '';

    const pageSize = options.pageSize || 100;

    const page = options.page && `OFFSET ${(pageSize * (options.page - 1))}` || "";

    const query = `SELECT ${selectClause} FROM ${options.table} ${whereClause} LIMIT ${pageSize} ${page}`;

    const data = await dbQuerry(query, callback)

    return data
};

export const find = async function (options: { table: string, id?: number, where?: object, select?: Array<string> }, callback: Function = null) {
  
    let whereClause = "";

    if (options.id && options.where) {

        if (callback) {

            return callback(error, null);

        } else {

            return { error: error }

        }
    } else if (!options.id && !options.where) {

        error = "No {id} or {where} in query."

        if (callback) {

            return callback(error, null)

        } else {

            return { error: error }
        }

    } else if (options.id) {

        whereClause = ` WHERE id = ${options.id}`

    } else if (options.where) {

        whereClause = ` WHERE ${Object.entries(options.where).map(([key, value]) => `${key} = ${connection.escape(value)}`).join(" and ")}`
    }

    const query = `SELECT ${options.select ? options.select.join(', ') : "*"} FROM ${options.table} ${whereClause} LIMIT 1`

    const data = await dbQuerry(query, callback)

    if (!data[0]) {

        return `No row from table {${options.table}} found.`
    }

    return data[0]
};

export const insert = async function (options: { table: string, data: object }, callback: Function = null) {

    if (!options.data) {

        return new Error("No data passed.")
    }

    const query = `INSERT INTO ${options.table} SET ?`;

    const data = await dbQuerry(query, options.data, callback)

    return data
};

export const update = async function (options: { table: string, data?: object, id?: number, where?: object }, callback: Function = null) {

    let query = `UPDATE ${options.table} SET ?`;

    if (options.id && options.where) {

        if (callback) {

            return callback(error, null);

        } else {

            return { error: error }
        }
    }

    if (options.where) {

        query += ` WHERE ${Object.entries(options.where).map(([key, value]) => `${key} = ${connection.escape(value)}`).join(" AND ")}`

    } else if (options.id) {

        query += ` WHERE id = ${options.id}`;
    }

    const data = await dbQuerry(query, options.data, callback);

    return data;
}

export const remove = async function (options: { table: string, id?: number, where?: object }, callback: Function = null) {

    let query = `DELETE FROM ${options.table} WHERE`;

    if (options.id && options.where) {

        if (callback) {

            return callback(error, null);

        } else {

            return { error: error }
        }
    }

    if (!options.id && !options.where) {

        error = "No {id} or {where} in query."

        if (callback) {

            return callback(error, null)

        } else {

            return { error: error }
        }
    }

    if (options.id) {

        query += ` id = ${options.id}`
    }

    if (options.where) {

        query += ` ${Object.entries(options.where).map(([key, value]) => `${key} = ${connection.escape(value)}`).join(" AND ")}`
    }

    const data = await dbQuerry(query, callback)

    return data
}

