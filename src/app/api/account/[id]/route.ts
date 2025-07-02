import { errors } from "@/helpers/api/errors.helper";
import { createBearerToken } from "@/helpers/api/jwt.helper";
import type { AccountModel } from "@/types/account/model.type";
import type { StatusError } from "@/types/api.types";
import type { AuthModel } from "@/types/auth/model.type";
import { AxiosError } from "axios";
import { NextResponse, type NextRequest } from "next/server";

let authUserInfo: AccountModel.User & AuthModel.Request = {
  clientEmail: process.env.NEXT_PUBLIC_USERNAME ?? "",
  clientPassword: process.env.NEXT_PUBLIC_PASSWORD ?? "",
  clientId: "1234567890",
  clientName: "John Doe",
  points: 50,
  discountQR: "DISCOUNT10-ABC123XYZ"
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const credentials: AuthModel.Request = await request.json();
  const token = request.headers.get("bearer-token");

  if (!token) {
    const error = new Error(errors[500].message);
    error.cause = errors[500].cause;
    const errorStatus: StatusError = { ...error, statusCode: 500 };
    throw errorStatus;
  }

  if (!id || id !== authUserInfo.clientId) {
    const error = new Error(errors[404].message);
    error.cause = errors[404].cause;
    const errorStatus: StatusError = { ...error, statusCode: 404 };
    throw errorStatus;
  }

  try {

    authUserInfo = {
      ...authUserInfo,
      clientName: credentials.clientName,
      clientEmail: credentials.clientEmail,
      clientPassword: credentials.clientPassword
    };

    const token = createBearerToken(credentials.clientName);

    return NextResponse.json({ token }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return new Response(`${error.message}: ${error.cause}`, {
        status: error.response?.status || 500
      });
    }

    return new Response(`${error}`);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = request.headers.get("bearer-token");

  if (!token) {
    const error = new Error(errors[500].message);
    error.cause = errors[500].cause;
    const errorStatus: StatusError = { ...error, statusCode: 500 };
    throw errorStatus;
  }

  if (!id || id !== authUserInfo.clientId) {
    const error = new Error(errors[404].message);
    error.cause = errors[404].cause;
    const errorStatus: StatusError = { ...error, statusCode: 404 };
    throw errorStatus;
  }


  try {

    const response: AccountModel.User = {
      clientId: authUserInfo.clientId,
      clientName: authUserInfo.clientName,
      clientEmail: authUserInfo.clientEmail,
      points: authUserInfo.points,
      discountQR: authUserInfo.discountQR
    };

    return NextResponse.json({ response }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return new Response(`${error.message}: ${error.cause}`, {
        status: error.response?.status || 500
      });
    }

    return new Response(`${error}`);
  }
}
