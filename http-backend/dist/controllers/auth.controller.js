import { prisma } from "../config/prisma.js";
import { hashPassword, unHashPassword } from "../utils/securePassword.js";
import { generateToken } from "../utils/issueTokens.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError, {} from "../utils/ApiError.js";
async function signupController(request, response) {
    const data = request.body;
    try {
        const isAlreadyUser = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if (isAlreadyUser) {
            throw new ApiError({ error: "Already a user!", sc: 409 });
        }
    }
    catch (error) {
        const err = error;
        return response
            .status(409)
            .json(new ApiResponse({ success: false, message: err.error, sc: err.sc }));
    }
    const hashedPassword = await hashPassword(data.password);
    const user = await prisma.user.create({
        data: { name: data.name, email: data.email, password: hashedPassword },
    });
    if (!user) {
        return response.status(500).json({
            success: false,
            error: "Internal Server Error!",
        });
    }
    const token = generateToken({ userId: user.id });
    return response
        .status(201)
        .cookie("token", token, { httpOnly: true, secure: true })
        .json(new ApiResponse({
        success: true,
        message: "Account created!",
        sc: 201,
        data: { token },
    }));
}
async function signinController(request, response) {
    const data = request.body;
    try {
        const user = await prisma.user.findUnique({ where: { email: data.email } });
        if (!user) {
            throw new ApiError({ error: "Invalid credentials!", sc: 404 });
        }
        const isPasswordMatched = await unHashPassword(data.password, user.password);
        if (!isPasswordMatched) {
            throw new ApiError({ error: "Invalid credentials!", sc: 404 });
        }
        const token = generateToken({ userId: user.id });
        const { name, email } = user;
        return response
            .status(200)
            .cookie("token", token)
            .json(new ApiResponse({
            success: true,
            message: "Logged in successfully!",
            sc: 200,
            data: { name, email, token },
        }));
    }
    catch (error) {
        const err = error;
        if (err.sc === 404) {
            return response
                .status(404)
                .json(new ApiResponse({ success: false, message: err.message, sc: 404 }));
        }
        else {
            return response.status(500).json(new ApiResponse({
                success: false,
                message: "Internal server error!",
                sc: 500,
            }));
        }
    }
}
export { signupController, signinController };
