import type { OverviewApiService } from "./overview/service.type";
import type { AccountApiService } from "./account/service.type";
import type { DeliveryApiService } from "./delivery/service.type";

export namespace ServiceTypes {
	export interface ApiService {
		overview: OverviewApiService;
		account: AccountApiService;
		delivery: DeliveryApiService;
	}
}