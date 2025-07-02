import { qrSubscribeApiService } from '@/services/qr-subscribe/qr-subscribe.api.service';

describe('qrSubscribeApiService consumeDiscount', () => {
  const token = 'fake-token';

  let mockClose: jest.Mock;
  let mockEventSourceInstance: {
    onmessage: ((event: MessageEvent) => void) | null;
    onerror: ((err: unknown) => void) | null;
    close: jest.Mock;
  };

  beforeEach(() => {
    mockClose = jest.fn();

    mockEventSourceInstance = {
      onmessage: null,
      onerror: null,
      close: mockClose,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).EventSource = jest.fn(() => mockEventSourceInstance);
  });

  it('should resolve when event is redeemed', async () => {
    const service = qrSubscribeApiService();

    const promise = service.consumeDiscount('DISCOUNT10-ABC123XYZ', token);

    mockEventSourceInstance.onmessage?.({
      data: JSON.stringify({ redeemed: true }),
    } as MessageEvent);

    await expect(promise).resolves.toBe(true);
    expect(mockClose).toHaveBeenCalled();
  });

});