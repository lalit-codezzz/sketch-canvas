class ApiResponse {
    success;
    message;
    sc;
    data;
    constructor({ success, message, sc, data }) {
        this.success = success;
        this.message = message;
        this.sc = sc;
        this.data = data;
    }
}
export default ApiResponse;
