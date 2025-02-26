class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong", // Fixed the spelling of "message"
        errors = [], // Fixed missing comma
        stack = "" // Fixed missing comma and spelling of "stack"
    ) {
        super(message); // "message" not "massage"
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors; // Assigning "errors" correctly

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };