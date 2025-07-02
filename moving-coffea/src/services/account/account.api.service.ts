import type { AccountModel } from "@/types/account/model.type";
import type { AccountApiService } from "@/types/account/service.type";
import axios from "axios";

export const accountApiService = (): AccountApiService => ({
	getUser: async (userId: string) => {
		const response = await axios.get(`/api/account/${userId}`);
		if (response.status !== 200) {
			throw new Error("Failed to fetch user data");
		}
		return response.data;
	},
	putUser: async (user: AccountModel.Request & { name: string }, userId: string) => {
		const response = await axios.put(`/api/account/${userId}`, {
			headers: {
				"Content-Type": "application/json",
			}, user

		});
		if (response.status !== 200) {
			throw new Error("Failed to update user data");
		}
		return response.data;
	},
	signout: async () => {
		const response = await axios.delete('/api/account');
		if (response.status !== 200) {
			throw new Error("Failed to delete user data");
		}
		return response.data;
	},

	signin: async (credentials: AccountModel.Request) => {
		const response = await axios.post('/api/account', credentials);
		if (response.status !== 200) {
			throw new Error("Failed to delete user data");
		}
		return response.data;
	},
});
