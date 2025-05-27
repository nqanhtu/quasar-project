<template>
  <div>
    <CardTabs />
    <q-separator class="q-mb-lg" />
    <div class="card-section">
      <CardNumberToggle :showCardNumber="showCardNumber" @toggle="$emit('toggle-card-number')" />
      <CreditCard :cardInfo="cardInfo" :showCardNumber="showCardNumber" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTabs from './CardTabs.vue';
import CardNumberToggle from './CardNumberToggle.vue';
import CreditCard from './CreditCard.vue';
import type { CardInfo } from '../types';

defineProps<{
  cardInfo: CardInfo;
  showCardNumber: boolean;
}>();

defineEmits<{
  'toggle-card-number': [];
}>();
</script>
