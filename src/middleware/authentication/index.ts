import { select } from "../../database/connection"
import { compareHash } from "../encryption";

export default async function (req: any, res: any) {

    if (!req.headers.authorization || !req.headers.access_key) {

        res.status(404).send({ error: "No access headers. Check your access_key or authorization." })
    }

    const adminOwner = req.headers.access_key?.split('|')[0]

    const adminToken = req.headers.access_key?.split('|')[1]

    const admin = await select({

        table: "access_keys",

        where: { owner_id: adminOwner, type: "admin" }

    });

    if (Array.isArray(admin) && admin.length > 0) {

        for (const key of admin) {

            const data = await compareHash(adminToken, key.token)

            if (data === true) {

                const tokenOwner = req.headers.authorization?.replace("Bearer ", "").split('|')[0]

                const userToken = req.headers.authorization?.replace("Bearer ", "").split('|')[1]

                const data = await select({

                    table: "tokens",

                    where: { tokenable_id: tokenOwner }
                });

                if (Array.isArray(data) && data.length > 0) {

                    for (const key of data) {

                        const data = await compareHash(userToken, key.token)

                        if (data) {

                            return

                        }
                    }
                } return res.status(403).send({ error: "Access denied. No token matched." })
            }
        }
    } return res.status(403).send({ error: "Access denied. No access key matched." })
}