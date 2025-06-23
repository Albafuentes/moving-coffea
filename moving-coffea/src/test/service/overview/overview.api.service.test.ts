import { response } from "@/mocks/api/overview/response.mock";
import { overviewApiService } from "@/services/overview/overview.api.service";
import "@testing-library/jest-dom";

describe("overview-api.service", () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});
	it("Should return projects when getUser is called", async () => {
		const fakeData = response;
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: async () => fakeData,
		});

		const responseService = await overviewApiService().getOverview();

		expect(fetch).toHaveBeenCalledWith("/api/overview");
		expect(responseService).toEqual(fakeData);
	});
});
