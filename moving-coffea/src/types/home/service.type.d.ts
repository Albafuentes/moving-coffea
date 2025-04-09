export interface HomeApiService {
    getHome(): Promise<HomeModel.Sale>;
}