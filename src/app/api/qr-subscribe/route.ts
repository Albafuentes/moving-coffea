import { errors } from "@/helpers/api/errors.helper";
import type { StatusError } from "@/types/api.types";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const code = searchParams.get('code')

    if (!token) {
        const error = new Error(errors[500].message);
        error.cause = errors[500].cause;
        const errorStatus: StatusError = { ...error, statusCode: 500 };
        throw errorStatus;
    }
    const stream = new ReadableStream({
        start(controller) {
            const encoder = new TextEncoder()

            setTimeout(() => {
                const event = {
                    code: code,
                    redeemed: true,
                }
                const payload = `data: ${JSON.stringify(event)}\n\n`
                controller.enqueue(encoder.encode(payload))
                controller.close()
            }, 5000)
        },
    })

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
        },
    })
}