import type { CardInfo } from 'src/types';

export function getCreditCards(): Promise<CardInfo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          cardHolder: 'Mark Henry',
          cardNumber: '4111111111112020',
          expiry: '12/25',
          cvv: '123',
          frozen: false,
        },
        {
          id: 2,
          cardHolder: 'Jane Smith',
          cardNumber: '5500000000000004',
          expiry: '01/27',
          cvv: '456',
          frozen: false,
        },
      ]);
    }, 1000);
  });
}
