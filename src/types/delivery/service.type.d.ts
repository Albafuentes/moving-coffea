import type { DeliveryModel } from "./model.type";

export interface DeliveryApiService {
	getMenu(token:string): Promise<DeliveryModel.Item[]>;
}
