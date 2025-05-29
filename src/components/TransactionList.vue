<template>
  <div class="transactions-list">
    <TransactionItem
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      :transaction="transaction"
      :index="index"
    />

    <div class="q-py-md text-center bg-green-1 text-primary text-bold cursor-pointer">
      View all card transactions
    </div>
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
