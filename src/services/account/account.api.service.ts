import type { AccountApiService } from "@/types/account/service.type";
import type { AuthModel } from "@/types/auth/model.type";
import axios from "axios";

export const accountApiService = (): AccountApiService => ({
	getUser: async (userId: string, token: string) => {
		const response = await axios.get(`/api/account/${userId}`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"bearer-token": token,
			}
		});
		if (response.status !== 200) {
			throw new Error("Failed to fetch user data");
		}
		return response.data;
	},
	putUser: async (user: AuthModel.Request & { name: string }, userId: string, token: string) => {
		const response = await axios.put(`/api/account/${userId}`, {
			user,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"bearer-token": token,
			}
		});
		if (response.status !== 200) {
			throw new Error("Failed to update user data");
		}
		return response.data;
	},
});
