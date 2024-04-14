import droptables from "../../../../dev/migration/droptables";

export default async function (req: any, res: any) {

    try {

        droptables();

        return res.status(201).send("Tables dropped.")

    } catch (ex) {

        return res.status(500).send(ex.toString())
    }
}