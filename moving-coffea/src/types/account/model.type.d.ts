export namespace AccountModel {
	interface User {
		clientId: string;
		clientName: string;
		clientEmail: string;
		points: number;
		discountQR: string | null; //DISCOUNT10-ABC123XYZ - ACUMALATE10-ABC123XYZ
	}
}
