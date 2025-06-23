import { NextRequest } from "next/server";
import type { StatusError } from "../../../types/api.types";
import { response } from "../../../mocks/api/overview/response.mock";
import { errors, isStatusError } from "@/helpers/api/errors.helper";

export function GET(request: NextRequest) {
  const token = request.headers.get("token");
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
    if (isStatusError(error)) {
      return new Response(`${error.message}: ${error.cause}`, {
        status: error.statusCode,
      });
    }

    return new Response(`${error}`);
  }
}
