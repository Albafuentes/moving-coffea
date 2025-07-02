
export interface QrSubscribeApiService {
    consumeDiscount: (qrCode: string, token: string) => Promise<boolean>
}