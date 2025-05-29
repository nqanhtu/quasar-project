export function generateRandomCardNumber(): string {
  return Array.from({ length: 4 }, () => Math.floor(1000 + Math.random() * 9000)).join(' ');
}

export function generateRandomExpiry(): string {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(Math.floor(Math.random() * 5) + 25); // 2025 - 2029
  return `${month}/${year}`;
}

export function generateRandomCVV(): string {
  return String(Math.floor(100 + Math.random() * 900));
}
