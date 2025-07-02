import type { NextRequest } from "next/server";
import type { StatusError } from "../../../types/api.types";
import { response } from "../../../mocks/api/overview/response.mock";
import { errors } from "@/helpers/api/errors.helper";
import { AxiosError } from "axios";

export function GET(request: NextRequest) {
  const token = request.headers.get("bearer-token");
  try {
    if (!token) {
      const error = new Error(errors[500].message);
      error.cause = errors[500].cause;
      const errorStatus: StatusError = { ...error, statusCode: 500 };
      throw errorStatus;
    }

    return new Response(JSON.stringify(response), {
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
