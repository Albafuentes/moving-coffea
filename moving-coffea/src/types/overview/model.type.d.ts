export enum DiscountTypes {
  DIRECT = "direct",
  ACCUMULATIVE = "accumulative",
}
export namespace OverviewModel {
  interface Sale {
    saleInitDate: string;
    saleEndDate: string;
    product: Products;
    discount: {
      type: DiscountTypes;
      value: number;
    };
  }
}
