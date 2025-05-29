<template>
  <div
    class="q-pa-lg text-white relative-position credit-card"
    :class="[cardInfo.frozen ? 'bg-grey-3 opacity-50' : 'bg-primary text-white']"
  >
    <CardHeader :frozen="cardInfo.frozen" />
    <CardHolderName :name="cardInfo.cardHolder" />
    <CardNumber :number="cardInfo.cardNumber" :showFull="showCardNumber" />
    <CardDetails :expiry="cardInfo.expiry" :cvv="cardInfo.cvv" :showCvv="showCardNumber" />
  </div>
</template>

<script setup lang="ts">
import CardHeader from './CardHeader.vue';
import CardHolderName from './CardHolderName.vue';
import CardNumber from './CardNumber.vue';
import CardDetails from './CardDetails.vue';
import type { CardInfo } from '../types';

defineProps<{
  cardInfo: CardInfo;
  showCardNumber: boolean;
}>();
</script>

<style scoped>
.credit-card {
  width: 414px;
  height: 249px;
  border-radius: 16px;
}
</style>
