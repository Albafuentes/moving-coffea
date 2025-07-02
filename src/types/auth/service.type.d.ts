import type { AuthModel } from "./model.type";

export interface AuthApiService {
	signout(): Promise<Response>;
	signin(credentials: AuthModel.Request): Promise<{ token: string }>;
}
