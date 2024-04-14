import { renderToString } from 'react-dom/server';
import authentication from '../../src/middleware/authentication';

export default async function (req: any, res: any) {

    await authentication(req, res)

    const rootApi = (
        <div style={{ color: 'green', fontSize: '60px' }}>
            <h1>WELCOME TO NEXT API!</h1>
        </div>
    )

    const htmlString = renderToString(rootApi)
    return res.status(403).send(htmlString)
}