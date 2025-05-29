import { defineStore } from 'pinia';
import type { CardInfo } from 'src/types';
import { computed, ref, watch } from 'vue';

export const useCardStore = defineStore('creditCard', () => {
  const cards = ref<CardInfo[]>(loadFromLocalStorage());

  function setCards(newCards: CardInfo[]) {
    cards.value = newCards;
  }

  function addCard(card: CardInfo) {
    cards.value.push(card);
  }

  watch(
    cards,
    (newVal) => {
      localStorage.setItem('credit_cards', JSON.stringify(newVal));
    },
    { deep: true },
  );

  function loadFromLocalStorage(): CardInfo[] {
    const data = localStorage.getItem('credit_cards');
    return data ? JSON.parse(data) : [];
  }

  function toggleFreeze(cardId: number) {
    const card = cards.value.find((c) => c.id === cardId);
    if (card) {
      card.frozen = !card.frozen;
    }
  }

  const getCardById = (id: number) => computed(() => cards.value.find((card) => card.id === id));
  return { cards, setCards, addCard, toggleFreeze, getCardById };
});
