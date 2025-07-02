import type { Products } from "@/types/products/model.type";

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
