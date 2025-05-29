<template>
  <div class="q-pa-lg">
    <q-expansion-item
      icon="img:icons/card-details.svg"
      label="Card details"
      expand-icon="img:icons/down-arrow.svg"
      header-class="header"
    >
    </q-expansion-item>

    <q-expansion-item
      style="margin-top: 24px"
      icon="img:icons/transaction.svg"
      label="Recent transactions"
      expand-icon="img:icons/down-arrow.svg"
      header-class="header"
      class="expansion-item"
    >
      <TransactionList :transactions="transactions" />
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import TransactionList from './TransactionList.vue';
import type { Transaction } from '../types';

defineProps<{
  transactions: Transaction[];
}>();
</script>

<style lang="scss">
.expansion-item {
  border: 1px solid #eee;
  border-radius: 8px;
}
.header {
  background: #f5f9ff !important;
  border: 1px solid #eee;
  border-radius: 8px;
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
