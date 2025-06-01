<template>
  <div>
    <CardTabs />
    <div class="card-section shadow-2">
      <div class="flex card-wrapper">
        <div class="flex-grow flex column items-center">
          <div class="relative-position">
            <CardNumberToggle
              :showCardNumber="showCardNumber"
              @toggle="$emit('toggle-card-number')"
              class="absolute"
              style="top: -30px; right: 0px"
            />
            <q-carousel
              v-model="slide"
              transition-prev="jump-right"
              transition-next="jump-left"
              swipeable
              animated
              control-color="primary"
              navigation
              height="310px"
              style="display: inline-block"
              class=""
            >
              <q-carousel-slide
                :name="item.id"
                v-for="item in cardStore.cards"
                :key="item.id"
                class="carousel-slide"
              >
                <CreditCard class="credit-card" :cardInfo="item" :showCardNumber="showCardNumber" />
              </q-carousel-slide>
            </q-carousel>
          </div>

          <CardActions v-if="card" :cardId="slide" />
        </div>
        <div class="flex-grow min-width-transactions">
          <TransactionPanel :transactions="transactions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTabs from './CardTabs.vue';
import CardNumberToggle from './CardNumberToggle.vue';
import type { Transaction } from '../types';
import TransactionPanel from './TransactionPanel.vue';
import { computed, onMounted, ref } from 'vue';
import CardActions from './CardActions.vue';
import { useCardStore } from 'src/stores/cardStore';
import { getCreditCards } from 'src/api/cardApi';
import CreditCard from './CreditCard.vue';

const cardStore = useCardStore();

const slide = ref(1);

const card = computed(() => cardStore.getCardById(slide.value));

async function fetchCards() {
  if (cardStore.cards.length === 0) {
    const cards = await getCreditCards();
    cardStore.setCards(cards);
  }
}

onMounted(async () => {
  await fetchCards();
});

const transactions = ref<Transaction[]>([
  {
    id: 1,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'Refund on debit card',
    icon: 'icons/file-storage.svg',
    iconColor: 'file-storage',
  },
  {
    id: 2,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'icons/flights.svg',
    iconColor: 'flights',
  },
  {
    id: 3,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'icons/megaphone.svg',
    iconColor: 'megaphone',
  },
  {
    id: 4,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'icons/file-storage.svg',
    iconColor: 'file-storage',
  },
]);

defineProps<{
  showCardNumber: boolean;
}>();

defineEmits<{
  'toggle-card-number': [];
}>();
</script>

<style>
.card-section {
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
  margin-top: 16px;
  padding-left: 40px;
  padding-top: 60.5px;
  padding-bottom: 40px;
}

.carousel-slide {
  padding: 0px;
}

.card-wrapper {
  justify-content: center;
  gap: 28px;
}

.col-a {
}

.col-b {
  flex: 1 1 200px;
}

.min-width-transactions {
  min-width: 300px;
  max-width: 460px;
}
.flex-grow {
  flex: 1 1 0%;
}
</style>
