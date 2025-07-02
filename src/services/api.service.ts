import type { ServiceTypes } from "@/types/service.types";
import { overviewApiService } from "./overview/overview.api.service";
import { deliveryApiService } from "./delivery/delivery.api.service";
import { accountApiService } from "./account/account.api.service";
import { authApiService } from "./auth/auth.api.service";

export const getApiService = (
): ServiceTypes.ApiService => ({
    overview: overviewApiService(),
    account: accountApiService(),
    delivery: deliveryApiService(),
    auth: authApiService()
});