import type { AccountModel } from "./model.type";

export interface AccountApiService {
	getUser(userId: string): Promise<AccountModel.User>;
	putUser(user: AccountModel.User): Promise<AccountModel.User>;
	deleteUser(userId: string): Promise<Response>;
}
