import type { OverviewApiService } from "@/types/overview/service.type";
import axios from "axios";

export const overviewApiService = (): OverviewApiService => ({
    getOverview: async () => {
        const response = await axios.get("/api/overview");
        
        if (response.status !== 200) {
            throw new Error("Failed to fetch overview data");
        }
        return response.data;
    },
})