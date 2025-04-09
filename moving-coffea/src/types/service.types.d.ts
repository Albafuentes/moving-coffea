import type { HomeApiService } from "./home/service.type";
import type { AccountApiService } from "./account/service.type";
import type { DeliveryApiService } from "./delivery/service.type";

export namespace ServiceTypes {
	export interface ApiService {
		home: HomeApiService;
		account: AccountApiService;
		delivery: DeliveryApiService;
	}
}