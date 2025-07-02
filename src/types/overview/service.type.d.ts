import type { OverviewModel } from "./model.type";

export interface OverviewApiService {
  getOverview(token:string): Promise<OverviewModel.Sale>;
}
