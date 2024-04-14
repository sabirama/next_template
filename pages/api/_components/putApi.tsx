import { find, update } from "../../../src/database/connection";

export default async function updateTableRow(table: string, req: any) {
    try {

        const response = await find({ table: table, id: req.query.id });

        if (response) {

            const updatedRow = await update({ table: table, data: req.body, id: req.query.id });

            if (updatedRow) {

                const data = { ...req.body, id: req.query.id };

                return { data: data };
            }
        }

        return { error: `Error: No row from table {${table}} found.` };

    } catch (ex) {

        return { error: ex.toString() };
    }
}