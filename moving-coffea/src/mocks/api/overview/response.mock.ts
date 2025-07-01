import { DiscountTypes, type OverviewModel } from "@/types/overview/model.type";
import { CoffeaMix } from "@/types/products.types";

export const response: OverviewModel.Sale = {
  saleInitDate: new Date().toJSON(),
  saleEndDate: new Date(60 * 60 * 3).toJSON(),
  product: CoffeaMix.MILKYCHAI,
  discount: {
    type: DiscountTypes.DIRECT,
    value: 10,
  },
};
