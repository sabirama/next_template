import { insert, find } from "../../../src/database/connection";

export default async function (table: string, req: any) {
    try {
        if (!req.body) {

            return { error: "No body in request." };
        }

        const data = await insert({ table: table, data: req.body });

        if (typeof data === 'object') {
            const response = await find({ table: table, id: (data as { insertId: number })?.insertId });
            console.log(response)
            return { data: response };
        }



    } catch (ex) {

        return { error: ex.toString() };

    }
}