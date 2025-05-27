<template>
  <div class="credit-card q-mb-lg">
    <div class="card-gradient q-pa-lg text-white relative-position">
      <CardHeader :frozen="cardInfo.frozen" />
      <CardHolderName :name="cardInfo.holderName" />
      <CardNumber
        :number="cardInfo.number"
        :lastFour="cardInfo.lastFour"
        :showFull="showCardNumber"
      />
      <CardDetails :expiry="cardInfo.expiry" :cvv="cardInfo.cvv" :showCvv="showCardNumber" />
    </div>
    <CardActions />
  </div>
</template>

<script setup lang="ts">
import CardHeader from './CardHeader.vue';
import CardHolderName from './CardHolderName.vue';
import CardNumber from './CardNumber.vue';
import CardDetails from './CardDetails.vue';
import CardActions from './CardActions.vue';
import type { CardInfo } from '../types';

defineProps<{
  cardInfo: CardInfo;
  showCardNumber: boolean;
}>();
</script>

<style scoped>
.card-gradient {
  background: linear-gradient(135deg, #00d4aa 0%, #00b894 100%);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 212, 170, 0.3);
  min-height: 200px;
}
</style>
