<template>
  <div class="bg-white rounded-borders q-pa-lg">
    <PanelActions />
    <q-separator class="q-my-lg" />
    <TransactionList :transactions="transactions" />
  </div>
</template>

<script setup lang="ts">
import PanelActions from './PanelActions.vue';
import TransactionList from './TransactionList.vue';
import type { Transaction } from '../types';

defineProps<{
  transactions: Transaction[];
}>();
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
</style>
