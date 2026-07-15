class ApiError extends Error {
    success;
    error;
    sc;
    constructor({ error, sc }) {
        super(error);
        this.success = false;
        this.error = error;
        this.sc = sc;
    }
}
export default ApiError;
