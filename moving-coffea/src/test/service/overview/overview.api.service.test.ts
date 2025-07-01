import { overviewApiService } from "@/services/overview/overview.api.service";
import "@testing-library/jest-dom";
import axios from "axios";

jest.mock("axios");

describe("overview-api.service", () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});
	it("Should return projects when getUser is called", async () => {
		const mockedResponse = {
		  saleInitDate: new Date().toJSON(),
		  saleEndDate: new Date(60 * 60 * 3).toJSON(),
		  product: "milky chai",
		  discount: {
			type: "direct",
			value: 10,
		  },
		};
		(axios.get as jest.Mock).mockResolvedValue({ data: mockedResponse, status: 200 });

		const responseService = await overviewApiService().getOverview();

		expect(axios.get).toHaveBeenCalledWith("/api/overview");
		expect(responseService).toEqual(mockedResponse);
	});
});
