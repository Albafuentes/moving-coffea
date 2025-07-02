import type { DeliveryApiService } from "@/types/delivery/service.type";
import axios from "axios";

export const deliveryApiService = (): DeliveryApiService => ({
    getMenu: async (token: string) => {
        const response = await axios.get("/api/delivery/menu", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "bearer-token": token,
            }
        });
        if (response.status !== 200) {
            throw new Error("Failed to fetch menu data");
        }
        return response.data;
    },
})