import { renderToString } from 'react-dom/server';
import getApi from '../_components/getApi';
import postApi from '../_components/postApi';
import putApi from '../_components/putApi';
import delApi from '../_components/delApi';
import authentication from '../../../src/middleware/authentication';

const errorMsg = (
    <h1>
        ERROR 404. METHOD DOES NOT EXIST IN THIS ENDPOINT.
    </h1>
)

export default async function (req: any, res: any) {

    await authentication(req, res)

    const table = "items"

    if (req.method === 'GET') {

        const { data, error } = await getApi(table, req)

        if (data) {
            res.status(200).send(data)
        } else {
            res.status(500).send(error)
        }
    }

    if (req.method === 'POST') {

        const { data, error } = await postApi(table, req)

        if (data) {
            res.status(201).send(data)
        } else {
            res.status(500).send(error)
        }
    }

    if (req.method === 'PUT') {

        const { data, error } = await putApi(table, req)

        if (data) {
            res.status(201).send(data)
        } else {
            res.status(500).send(error)
        }
    }

    if (req.method === 'DELETE') {

        const { data, error } = await delApi(table, req)

        if (data) {
            res.status(202).send(data)
        } else {
            res.status(500).send(error)
        }
    }

    return res.status(404).send(renderToString(errorMsg))
}