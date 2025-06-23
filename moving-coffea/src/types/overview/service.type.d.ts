export interface OverviewApiService {
    getOverview(): Promise<HomeModel.Sale>;
}