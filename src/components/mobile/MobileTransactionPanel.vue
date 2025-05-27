<template>
  <div class="mobile-transaction-panel">
    <!-- Card Details Button -->
    <div class="bg-white rounded-borders q-pa-lg q-mb-sm">
      <q-item class="q-pa-none" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="blue-1" text-color="primary">
            <q-icon name="credit_card" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-medium text-h6">Card details</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="grey-5" size="md" />
        </q-item-section>
      </q-item>
    </div>

    <!-- Recent Transactions Section -->
    <div class="bg-white rounded-borders q-pa-lg">
      <!-- Header -->
      <q-item class="q-pa-none q-mb-lg" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="blue-1" text-color="primary">
            <q-icon name="receipt_long" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-medium text-h6">Recent transactions</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="grey-5" size="md" />
        </q-item-section>
      </q-item>

      <!-- Transaction List -->
      <div class="transaction-list">
        <MobileTransactionItem
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MobileTransactionItem from './MobileTransactionItem.vue';
import type { Transaction } from '../../types';

defineProps<{
  transactions: Transaction[];
}>();
</script>

<style scoped>
.rounded-borders {
  border-radius: 16px;
}

.transaction-list {
  margin-top: 1rem;
}
</style>
