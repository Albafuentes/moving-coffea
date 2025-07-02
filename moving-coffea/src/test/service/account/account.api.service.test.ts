import { accountApiService } from "@/services/account/account.api.service";
import "@testing-library/jest-dom";
import axios from "axios";
import { response as mockResponse } from "@/mocks/api/account/response.mock";
import { createToken } from "@/helpers/api/jwt.helper";
import type { AuthModel } from "@/types/auth/model.type";

jest.mock("axios");

describe("account-api.service", () => {
	const id = mockResponse.clientId;

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Should return projects when getUser is called", async () => {
		(axios.get as jest.Mock).mockResolvedValue({ data: mockResponse, status: 200 });

		const response = await accountApiService().getUser(id);

		expect(axios.get).toHaveBeenCalledWith(`/api/account/${id}`);
		expect(response).toEqual(mockResponse);
	});

	it("Should return new user when putUser is called", async () => {
		const request: AuthModel.Request = {
			clientEmail: "francisdoe@mail.es",
			clientPassword: "password123",
			clientName: "Francis Doe",
		};
		const token = createToken(request.clientName);
		(axios.put as jest.Mock).mockResolvedValue({ data: token, status: 200 });

		const response = await accountApiService().putUser(request, id);

		expect(axios.put).toHaveBeenCalledWith(`/api/account/${id}`, {
			headers: {
				"Content-Type": "application/json",
			}, user: request
		});
		expect(response).toEqual(token);
	});
});
