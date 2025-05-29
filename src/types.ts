import type { Component } from 'vue';

export interface MenuItem {
  label: string;
  icon: Component;
  active: boolean;
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

export interface CardInfo {
  id: number;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
}
