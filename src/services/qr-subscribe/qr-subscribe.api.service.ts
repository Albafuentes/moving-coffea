import type { QrSubscribeApiService } from "@/types/qr-subscribe/service.type"

export const qrSubscribeApiService = ():QrSubscribeApiService => ({
    consumeDiscount: async (qrCode: string, token: string) => {
        //TODO: Avoid to pass the token as a parameter.
        const eventSource = new EventSource(`/api/qr-subscribe?code=${qrCode}&token=${token}`)
        
        return new Promise((resolve, reject) => {
            eventSource.onmessage = (event) => {
                const data = JSON.parse(event.data)
                if (data.redeemed) {
                    eventSource.close()
                    resolve(true)
                }
            }

            eventSource.onerror = (err) => {
                console.error('Error en SSE', err)
                eventSource.close()
                reject(err)
            }
        })
    }
})