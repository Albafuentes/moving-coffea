import { StatusError } from "@/types/api.types";

export const errors = {
  500: {
    message: "Error 500",
    cause:
      "The user identification fails. Please sign-in to solve thge problem.",
  },
};

export function isStatusError(error: unknown): error is StatusError {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as any).__isStatusError === true
  );
}
