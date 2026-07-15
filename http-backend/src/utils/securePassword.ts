import bcrypt from "bcryptjs";

export async function hashPassword (password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 5);
    return hashedPassword;
}

export async function unHashPassword (password: string, hashedPassword: string): Promise<boolean> {
    const isMatched = await bcrypt.compare(password, hashedPassword);
    return isMatched;
}