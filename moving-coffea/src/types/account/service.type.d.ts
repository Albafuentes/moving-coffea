import type { AccountModel } from "./model.type";

export interface AccountApiService {
	getUser(userId: string): Promise<AccountModel.User>;
	putUser(user: AccountModel.Request, userId: string): Promise<AccountModel.User>;
	signout(): Promise<Response>;
	signin(credentials: AccountModel.Request): Promise<{ token: string }>;
}
