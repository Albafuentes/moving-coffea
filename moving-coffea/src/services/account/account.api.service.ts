import type { AccountApiService } from "@/types/account/service.type";

export const accountApiService = (): AccountApiService => ({
	getUser: async (userId: string) => {
		const response = await fetch(`/api/account/${userId}`);
		if (!response.ok) {
			throw new Error("Failed to fetch user data");
		}
		return response.json();
	},
	putUser: async (userId: string) => {
		const response = await fetch(`/api/account/${userId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});
		if (!response.ok) {
			throw new Error("Failed to update user data");
		}
		return response.json();
	},
	deleteUser: async (userId: string) => {
		const response = await fetch(`/api/account/${userId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete user data");
		}
		return response;
	},
});
