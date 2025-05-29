<template>
  <div>
    <CardTabs />
    <div class="card-section shadow-2">
      <div class="row">
        <div class="col-6">
          <CardNumberToggle
            :showCardNumber="showCardNumber"
            @toggle="$emit('toggle-card-number')"
          />

          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            height="300px"
          >
            <q-carousel-slide
              :name="item.id"
              class="column no-wrap flex-center"
              v-for="item in cardStore.cards"
              :key="item.id"
            >
              <CreditCard class="credit-card" :cardInfo="item" :showCardNumber="showCardNumber" />
            </q-carousel-slide>
          </q-carousel>

          <CardActions v-if="card" :cardId="slide" />
        </div>
        <div class="col-6"><TransactionPanel :transactions="transactions" /></div>
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
    icon: 'store',
    iconColor: 'blue',
  },
  {
    id: 2,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'flight_takeoff',
    iconColor: 'green',
  },
  {
    id: 3,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'shopping_bag',
    iconColor: 'pink',
  },
  {
    id: 4,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'store',
    iconColor: 'blue',
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
  padding-top: 31.5px;
  padding-bottom: 40px;
}

.credit-card {
  margin-top: 12px;
}
</style>
