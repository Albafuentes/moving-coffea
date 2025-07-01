export namespace DeliveryModel {
	interface Product {
		productId: string;
		productName: string;
		productDescription: string;
		productPrice: number;
		productCategory: ProductsCategory;
		productImageUrl: string;
		discount: boolean;
	}

	interface Stock {
		productStock: number;  // if it has a discount, it is a dessert is mandatory.
	}

	type Item =
		| (Product & { discount: true; } & Stock)
		| (Product & { category: ProductsCategory.DESSERTS; } & Stock)
		| Product
}
