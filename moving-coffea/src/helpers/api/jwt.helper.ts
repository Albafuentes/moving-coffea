import type { AccountModel } from "@/types/account/model.type";

export const createToken = (userName:string) => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ name: userName, sub: "1234567890", iat: Date.now(), exp: Date.now() + 3600 * 1000 })); // 1h expiración
    return `${header}.${payload}.`;
};