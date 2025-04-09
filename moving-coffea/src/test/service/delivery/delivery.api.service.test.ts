import { deliveryApiService } from "@/services/delivery/delivery.api.service";
import "@testing-library/jest-dom";

describe("account-api.service", () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});

	it("Should return projects when getUser is called", async () => {
		const fakeData = [{ message: "ok" }];
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: async () => fakeData,
		});

		const response = await deliveryApiService().getMenu();

		expect(fetch).toHaveBeenCalledWith("/api/delivery/menu");
		expect(response).toEqual(fakeData);
	});
});
