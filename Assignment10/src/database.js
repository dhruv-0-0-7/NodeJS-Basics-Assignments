import { v4 as uuid } from 'uuid';
import { verifyPassword, hashPassword } from './utils/utils.js';
import CustomError, { ERRORS } from './utils/errors.js';

const users = [];

export function getUserById(id) {
    return users.find(user => user.id === id);
}

export async function registerUser(data) {
    if (users.some(user => user.username === data.username))
        throw new CustomError(ERRORS.CERR_44(data.username));

    data.id = uuid();
    data.password = await hashPassword(data.password);
    users.push(data);
    return data.id;
}

export async function verifyUserCredentials({ username, password }) {
    const user = users.find(user => user.username === username);
    if (!user) throw new CustomError(ERRORS.CERR_43(username));
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) throw new CustomError(ERRORS.CERR_42);

    return user.id;
}

export function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    const user = users[index];

    users.splice(index, 1);
    return user;
}