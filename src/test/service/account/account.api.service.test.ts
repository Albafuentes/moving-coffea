import { accountApiService } from "@/services/account/account.api.service";
import "@testing-library/jest-dom";
import axios from "axios";
import { response as mockResponse } from "@/mocks/api/account/response.mock";
import { createBearerToken } from "@/helpers/api/jwt.helper";
import type { AuthModel } from "@/types/auth/model.type";

jest.mock("axios");

describe("account-api.service", () => {
	const id = mockResponse.clientId;
	const token = createBearerToken('John Doe');

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Should return projects when getUser is called", async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockResponse, status: 200 });

		const response = await accountApiService().getUser(id, token);

		expect(axios.get).toHaveBeenCalledWith(`/api/account/${id}`, {"headers": {"Accept": "application/json", "Content-Type": "application/json", "bearer-token": token}});
		expect(response).toEqual(mockResponse);
	});

	it("Should return new user when putUser is called", async () => {
		const request: AuthModel.Request = {
			clientEmail: "francisdoe@mail.es",
			clientPassword: "password123",
			clientName: "Francis Doe",
		};
		(axios.put as jest.Mock).mockResolvedValue({ data: token, status: 200 });

		const response = await accountApiService().putUser(request, id, token);

		expect(axios.put).toHaveBeenCalledWith(`/api/account/${id}`, {
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"bearer-token": token,
			}, user: request
		});
		expect(response).toEqual(token);
	});
});
