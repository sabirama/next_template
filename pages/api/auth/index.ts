import postApi from "../_components/postApi"
import { find } from "../../../src/database/connection";
import authentication from "../../../src/middleware/authentication";

export default async function (req: any, res: any) {
   
    await authentication(req, res);

    const table = "users";

    if (req.method === "POST") {
        
        if (req.query.action === 'register') {

            const response = await postApi(table, req)

            res.status(201).send(response)
        }

        else if (req.query.action === 'login') {

            const { username, password } = req.body

            const response = await find({ table: table, where: { username, password } });

            res.status(201).send(response)
        }

        else if (req.query.action === 'logout') {

            res.status(202).send({ data: "add logout code" })
        }

        return res.status(404).send({ error: "Action not found." })
    }

    res.status(405).send("METHOD NOT ALLOWED.")
}