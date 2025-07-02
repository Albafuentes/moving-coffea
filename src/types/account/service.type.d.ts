import type { AuthModel } from "../auth/model.type";
import type { AccountModel } from "./model.type";

export interface AccountApiService {
	getUser(userId: string, token:string): Promise<AccountModel.User>;
	putUser(user: AuthModel.Request, userId: string, token:string): Promise<AccountModel.User>;
}
