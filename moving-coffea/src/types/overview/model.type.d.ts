export namespace OverviewModel {
  enum DiscountTypes {
    DIRECT = "direct",
    ACCUMULATIVE = "accumulative",
  }
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
