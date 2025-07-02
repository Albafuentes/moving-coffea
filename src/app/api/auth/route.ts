import { errors } from "@/helpers/api/errors.helper";
import { createBearerToken } from "@/helpers/api/jwt.helper";
import type { AccountModel } from "@/types/account/model.type";
import type { StatusError } from "@/types/api.types";
import type { AuthModel } from "@/types/auth/model.type";
import { AxiosError } from "axios";
import type { NextRequest } from "next/server";

const authUserInfo: AccountModel.User & AuthModel.Request = {
    clientEmail: process.env.NEXT_PUBLIC_USERNAME ?? "",
    clientPassword: process.env.NEXT_PUBLIC_PASSWORD ?? "",
    clientId: "1234567890",
    clientName: "John Doe",
    points: 50,
    discountQR: "DISCOUNT10-ABC123XYZ"
}

//signin
export async function POST(request: NextRequest) {
    const credentials: AuthModel.Request = await request.json();
    try {
        if (!credentials || !credentials.clientEmail || !credentials.clientPassword) {
            const error = new Error(errors[400].message);
            error.cause = errors[400].cause;
            const errorStatus: StatusError = { ...error, statusCode: 400 };
            throw errorStatus;
        }

        if (credentials.clientEmail !== authUserInfo.clientEmail || credentials.clientPassword !== authUserInfo.clientPassword || credentials.clientName !== authUserInfo.clientName) {
            const error = new Error(errors[401].message);
            error.cause = errors[401].cause;
            const errorStatus: StatusError = { ...error, statusCode: 401 };
            throw errorStatus;
        }

        const token = createBearerToken(credentials.clientName);
        return new Response(JSON.stringify({ token }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
        });

} catch (error: unknown) {
    if (error instanceof AxiosError) {
        return new Response(`${error.message}: ${error.cause}`, {
            status: error.response?.status || 500,
        });
    }

    return new Response(`${error}`);
}
}

//signout
export async function DELETE() {

    try {
        return new Response(null, {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return new Response(`${error.message}: ${error.cause}`, {
                status: error.response?.status || 500,
            });
        }

        return new Response(`${error}`);
    }
}