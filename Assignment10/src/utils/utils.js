import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = await bcrypt.hash('SomethingHappenedSoFast', 10);
const SALT = await bcrypt.hash('SomethingSaltLike', 10);

export function generateAuthToken(id) {
    return jwt.sign({ id }, JWT_SECRET);
}

export function verifyAuthToken(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
}

export async function hashPassword(password) {
    return bcrypt.hash(password, SALT);
}

export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}