import type { ServiceTypes } from "@/types/service.types";
import { homeApiService } from "./overview/home.api.service";
import { deliveryApiService } from "./delivery/delivery.api.service";
import { accountApiService } from "./account/account.api.service";

export const getApiService = (
): ServiceTypes.ApiService => ({
    home: homeApiService(),
    account: accountApiService(),
    delivery: deliveryApiService(),
});