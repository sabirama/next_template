import { createAccessKeys } from "../../../dev/migration/tables/table_access_keys";
import { insert } from "../../../src/database/connection";
import { hashString } from "../../../src/middleware/encryption";

export default function (req: any, res: any) {
    createAccessKeys()
    insert({
        table: "access_keys",
        data: {
            token: hashString("admin001"),
            owner_id: 1,
            type: "admin"
        }
    })
    return res.status(204).send()
}
