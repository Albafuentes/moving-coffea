import type { HomeApiService } from "@/types/overview/service.type";

export const overviewApiService = (): HomeApiService => ({
    getOverview: async () => {
        const response = await fetch("/api/home");
        if (!response.ok) {
            throw new Error("Failed to fetch home data");
        }
        return response.json();
    },
})