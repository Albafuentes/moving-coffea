import { accountApiService } from "@/services/account/account.api.service";
import type { AccountModel } from "@/types/account/model.type";
import "@testing-library/jest-dom";

describe("account-api.service", () => {
	const id = "123";
	beforeEach(() => {
		global.fetch = jest.fn();
	});

	it("Should return projects when getUser is called", async () => {
		const fakeData = [{ message: "ok" }];
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: async () => fakeData,
		});

		const response = await accountApiService().getUser(id);

		expect(fetch).toHaveBeenCalledWith(`/api/account/${id}`);
		expect(response).toEqual(fakeData);
	});

	it("Should return projects when putUser is called", async () => {
		const fakeData = [{ message: "ok" }];
		const user: AccountModel.User = {
			clientId: id,
			clientName: "John Doe",
			clientEmail: "johndoe@mail.es",
			clientPassword: "123456",
			points: 100,
			discountQR: null,
		};

		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			status: 200,
			json: async () => fakeData,
		});

		const response = await accountApiService().putUser(user);

		expect(fetch).toHaveBeenCalledWith(`/api/account/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		expect(response).toEqual(fakeData);
	});

	it("Should return projects when deleteUser is called", async () => {
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			status: 204,
			text: async () => "",
		});

		await accountApiService().deleteUser(id);

		expect(fetch).toHaveBeenCalledWith(`/api/account/${id}`, {
			method: "DELETE",
		});
	});
});
