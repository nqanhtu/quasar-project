export interface MenuItem {
  label: string;
  icon: string;
  active: boolean;
}

export interface CardInfo {
  holderName: string;
  number: string;
  lastFour: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
}

export interface CardAction {
  label: string;
  icon: string;
  color?: string;
}

export interface Transaction {
  id: number;
  merchant: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
  iconColor: string;
}
