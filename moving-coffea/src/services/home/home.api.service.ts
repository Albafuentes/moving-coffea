import type { HomeApiService } from "@/types/home/service.type";

export const homeApiService = (): HomeApiService => ({
    getHome: async () => {
        const response = await fetch("/api/home");
        if (!response.ok) {
            throw new Error("Failed to fetch home data");
        }
        return response.json();
    },
})