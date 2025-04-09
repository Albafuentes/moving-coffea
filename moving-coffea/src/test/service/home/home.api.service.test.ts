import { homeApiService } from "@/services/home/home.api.service";
import "@testing-library/jest-dom";

describe("home-api.service", () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});
	it("Should return projects when getUser is called", async () => {
		const fakeData = [{ message: "ok" }];
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: async () => fakeData,
		});

		const response = await homeApiService().getHome();

		expect(fetch).toHaveBeenCalledWith("/api/home");
		expect(response).toEqual(fakeData);
	});
});
