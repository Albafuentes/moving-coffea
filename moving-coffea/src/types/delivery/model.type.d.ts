export namespace DeliveryModel {
	interface Item {
		productId: string;
		productName: string;
		productDescription: string;
		productPrice: number;
		productCategory: string;
		productImageUrl: string;
		productStock: number;
		discount: boolean;
	}
}
