import { createBearerToken } from "@/helpers/api/jwt.helper";
import { deliveryApiService } from "@/services/delivery/delivery.api.service";
import "@testing-library/jest-dom";
import axios from "axios";

jest.mock("axios");

describe("account-api.service", () => {

	it("Should return projects when getUser is called", async () => {
		const token = createBearerToken('John Doe');
		const mockedResponse = [{
			productId: "a0b859d6-2673-4257-9e49-c2228fe1539c",
			productName: "coffea short",
			productDescription: "Pure coffee essence, crafted by extracting the richest flavors in a single shot, delivering a bold and intense aroma that awakens the senses.",
			productPrice: 1.50,
			productCategory: "coffea",
			productImageUrl: "#",
			discount: false
		  }, {
			productId: "3a834323-5466-4bf6-aff7-3ec69caf66b8",
			productName: "coffea large",
			productDescription: "An extended shot of pure coffee, slowly extracted to unveil deeper, more complex aromas and a smooth, lingering intensity.",
			productPrice: 2.00,
			productCategory: "coffea",
			productImageUrl: "#",
			discount: false
		  }];
		(axios.get as jest.Mock).mockResolvedValue({ data: mockedResponse, status: 200 });

		const response = await deliveryApiService().getMenu(token);

		expect(axios.get).toHaveBeenCalledWith("/api/delivery/menu", {"headers": {"Accept": "application/json", "Content-Type": "application/json", "bearer-token": token}});
		expect(response).toEqual(mockedResponse);
	});
});
