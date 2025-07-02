export const errors = {
  500: {
    message: "500 Internal Server Error",
    cause:
      "The user identification fails. Please sign-in to solve the problem.",
  },
  400: {
    message: "400 Bad Request",
    cause:
      "Request body could not be read properly.",
  },
  401: {
    message: "401 Unauthorized",
    cause:
      "Invalid username or password.",
  },
  404: {
    message: "404 Not Found",
    cause:
      "The server cannot find the requested resource.",
  },
};
