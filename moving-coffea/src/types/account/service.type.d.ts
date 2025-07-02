import type { AuthModel } from "../auth/model.type";
import type { AccountModel } from "./model.type";

export interface AccountApiService {
	getUser(userId: string): Promise<AccountModel.User>;
	putUser(user: AuthModel.Request, userId: string): Promise<AccountModel.User>;
}
