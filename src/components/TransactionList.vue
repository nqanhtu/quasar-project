<template>
  <div class="transactions-list">
    <TransactionItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </div>
</template>

<script setup lang="ts">
import TransactionItem from './TransactionItem.vue';
import type { Transaction } from '../types';

defineProps<{
  transactions: Transaction[];
}>();
</script>

<style scoped>
.transactions-list {
  max-height: 400px;
  overflow-y: auto;
}
</style>
