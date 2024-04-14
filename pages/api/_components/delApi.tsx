import { find, remove } from "../../../src/database/connection";

export default async function (table: string, req: any) {
    try {

        const response = await find({ table: table, id: req.query.id });

        if (response) {

            await remove({ table: table, id: req.query.id });

            return { data: response };
        }
    } catch (ex) {

        return { error: ex.toString() }

    }
}