import type { AuthModel } from "@/types/auth/model.type";
import type { AuthApiService } from "@/types/auth/service.type";
import axios from "axios";

export const authApiService = (): AuthApiService => ({
	signout: async () => {
		const response = await axios.delete('/api/auth');
		if (response.status !== 200) {
			throw new Error("Failed to delete user data");
		}
		return response.data;
	},

	signin: async (credentials: AuthModel.Request) => {
		const response = await axios.post('/api/auth', credentials);
		if (response.status !== 200) {
			throw new Error("Failed to delete user data");
		}
		return response.data;
	},
});
