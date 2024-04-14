import migrate from "../../../../dev/migration/migrate";

export default async function (req: any, res: any) {

    try {

        migrate();

        return res.status(201).send("Tables created.")

    } catch (ex) {

        return res.status(500).send(ex.toString())
    }
}