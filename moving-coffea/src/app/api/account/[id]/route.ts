import { errors } from "@/helpers/api/errors.helper";
import { createToken } from "@/helpers/api/jwt.helper";
import type { AccountModel } from "@/types/account/model.type";
import type { StatusError } from "@/types/api.types";
import { AxiosError } from "axios";
import type { NextRequest } from "next/server";

let authUserInfo: AccountModel.User & AccountModel.Request = {
    clientEmail: process.env.NEXT_PUBLIC_USERNAME ?? "",
    clientPassword: process.env.NEXT_PUBLIC_PASSWORD ?? "",
    clientId: "1234567890",
    clientName: "John Doe",
    points: 50,
    discountQR: "DISCOUNT10-ABC123XYZ"
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const credentials: AccountModel.Request = await request.json();

    try {

        if (!id || id !== authUserInfo.clientId) {
            const error = new Error(errors[404].message);
            error.cause = errors[404].cause;
            const errorStatus: StatusError = { ...error, statusCode: 404 };
            throw errorStatus;
        }

        authUserInfo = { ...authUserInfo, clientName: credentials.clientName, clientEmail: credentials.clientEmail, clientPassword: credentials.clientPassword };
        const token = createToken(credentials.clientName);

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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {

        if (!id || id !== authUserInfo.clientId) {
            const error = new Error(errors[404].message);
            error.cause = errors[404].cause;
            const errorStatus: StatusError = { ...error, statusCode: 404 };
            throw errorStatus;
        }

        const response: AccountModel.User = {
            clientId: authUserInfo.clientId,
            clientName: authUserInfo.clientName,
            clientEmail: authUserInfo.clientEmail,
            points: authUserInfo.points,
            discountQR: authUserInfo.discountQR,
        };

        return new Response(JSON.stringify({ response }), {
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
