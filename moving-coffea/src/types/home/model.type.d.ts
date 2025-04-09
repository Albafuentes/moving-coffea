export namespace HomeModel {
	interface Sale {
		saleInitDate: string;
		saleEndDate: string;
		discount: {
			type: string; // direct to amount or acummulate points
			value: string;
		};
	}
}
