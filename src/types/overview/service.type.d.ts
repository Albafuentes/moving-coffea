import type { OverviewModel } from "./model.type";

export interface OverviewApiService {
  getOverview(): Promise<OverviewModel.Sale>;
}
