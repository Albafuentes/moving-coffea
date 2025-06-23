import type { OverviewApiService } from "@/types/overview/service.type";

export const overviewApiService = (): OverviewApiService => ({
    getOverview: async () => {
        const response = await fetch("/api/overview");
        if (!response.ok) {
            throw new Error("Failed to fetch home data");
        }
        return response.json();
    },
})