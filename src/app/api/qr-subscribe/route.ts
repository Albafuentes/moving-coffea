import { errors } from "@/helpers/api/errors.helper";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { code, token } = req.query;

    if (!token) {
        const error = new Error(errors[500].message);
        error.cause = errors[500].cause;
        return res.status(500).json({ message: error });
    }

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
    })

    const timeout = setTimeout(() => {
        const event = {
            code: code,
            redeemed: true,
        }

        res.write(`data: ${JSON.stringify(event)}\n\n`)
    }, 5000)

    req.on('close', () => {
        clearTimeout(timeout)
        res.end()
    })
}