import type { DeliveryApiService } from "@/types/delivery/service.type";

export const deliveryApiService = (): DeliveryApiService => ({
    getMenu: async () => {
        const response = await fetch("/api/delivery/menu");
        if (!response.ok) {
            throw new Error("Failed to fetch menu data");
        }
        return response.json();
    },
})