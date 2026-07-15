import bcrypt from "bcryptjs";
export async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 5);
    return hashedPassword;
}
export async function unHashPassword(password, hashedPassword) {
    const isMatched = await bcrypt.compare(password, hashedPassword);
    return isMatched;
}
