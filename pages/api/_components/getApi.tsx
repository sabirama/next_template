import { select } from "../../../src/database/connection"

export default async function (table: string, req: any) {
    try {
        let whereCluase = null;

        let selectClause = null;

        let pageSize = null;

        let page = null;

        if (req.query.where) {
            whereCluase = JSON.parse(req.query.where);
        }

        if (req.query.select) {
            selectClause = JSON.parse(req.query.select)
        }

        if (req.query.page_size) {
            pageSize = req.query.page_size
        }

        if (req.query.page) {
            page = req.query.page
        }

        const options = { table: table, where: whereCluase, select: selectClause, pageSize: pageSize, page: page }

        const response = await select(options);

        return { data: response }

    } catch (ex) {

        return { error: ex.toString()}

    }
}