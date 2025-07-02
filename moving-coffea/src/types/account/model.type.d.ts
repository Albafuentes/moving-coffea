export namespace AccountModel {

	interface Request {
		clientEmail: string;
		clientPassword:string;
		clientName: string;
	}
	interface User {
		clientId: string;
		clientName: string;
		clientEmail: string;
		points: number;
		discountQR: string | null; //DISCOUNT10-ABC123XYZ - ACUMALATE10-ABC123XYZ
	}
}
