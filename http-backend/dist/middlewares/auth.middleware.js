import { verifyToken } from "../utils/issueTokens.js";
import ApiResponse from "../utils/ApiResponse.js";
export default function authMiddleware(request, response, next) {
    let authToken = request.headers.authorization;
    if (!authToken) {
        authToken = request.cookies["token"];
    }
    if (!authToken) {
        return response
            .status(401)
            .json(new ApiResponse({ success: false, message: "Unauthorized!", sc: 401 }));
    }
    try {
        const userId = verifyToken(authToken);
        request.userId = userId;
        next();
    }
    catch (error) {
        const err = error;
        return response
            .status(err.sc)
            .json(new ApiResponse({ success: false, message: err.message, sc: err.sc }));
    }
}
