import type { DeliveryModel } from "./model.type";

export interface DeliveryApiService {
	getMenu(): Promise<DeliveryModel.Item[]>;
}
