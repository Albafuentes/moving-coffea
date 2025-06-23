import { OverviewModel } from "@/types/overview/model.type";

export const response: OverviewModel.Sale = {
  saleInitDate: new Date().toJSON(),
  saleEndDate: new Date(60 * 60 * 3).toJSON(),
  product: "milky chai",
  discount: {
    type: OverviewModel.DiscountTypes.DIRECT,
    value: 10,
  },
};
