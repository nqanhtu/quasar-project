<template>
  <div class="bg-white rounded-borders q-pa-lg">
    <q-separator class="q-my-lg" />

    <q-expansion-item
      expand-separator
      icon="img:icons/card-details.svg"
      label="Card details"
      expand-icon="img:icons/down-arrow.svg"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos
          corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto
          suscipit iste eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      expand-separator
      icon="img:icons/transaction.svg"
      label="Recent transactions"
      expand-icon="img:icons/down-arrow.svg"
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

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
</style>
