import "@testing-library/jest-dom";
import axios from "axios";
import { response as mockResponse } from "@/mocks/api/account/response.mock";
import { createToken } from "@/helpers/api/jwt.helper";
import type { AuthModel } from "@/types/auth/model.type";
import { authApiService } from "@/services/auth/auth.api.service";

jest.mock("axios");

describe("account-api.service", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Should return projects when signout is called", async () => {
		(axios.delete as jest.Mock).mockResolvedValue({
			ok: true,
			status: 200,
		});

		await authApiService().signout();

		expect(axios.delete).toHaveBeenCalledWith('/api/auth');
	});

	it("Should return token when signin is called", async () => {
		const token = createToken(mockResponse.clientName);
		(axios.post as jest.Mock).mockResolvedValue({ data: token, status: 200 });

		const resquest: AuthModel.Request = {
			clientEmail: process.env.NEXT_PUBLIC_USERNAME ?? "",
			clientPassword: process.env.NEXT_PUBLIC_PASSWORD ?? "",
			clientName: mockResponse.clientName,
		};

		await authApiService().signin(resquest);

		expect(axios.post).toHaveBeenCalledWith('/api/auth', resquest);
	});
});
