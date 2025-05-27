<template>
  <q-item class="q-pa-none q-mb-lg transaction-item">
    <q-item-section avatar>
      <q-avatar :color="transaction.iconColor" text-color="white" size="md">
        <q-icon :name="transaction.icon" size="sm" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-weight-bold text-h6 q-mb-xs">
        {{ transaction.merchant }}
      </q-item-label>
      <q-item-label class="text-grey-6 q-mb-xs">
        {{ transaction.date }}
      </q-item-label>
      <q-item-label class="transaction-type">
        <q-icon name="credit_card" size="xs" class="q-mr-xs" color="primary" />
        <span class="text-primary text-weight-medium">{{ transaction.type }}</span>
      </q-item-label>
    </q-item-section>
    <q-item-section side class="transaction-amount">
      <q-item-label
        :class="
          transaction.amount > 0 ? 'text-green text-weight-bold' : 'text-grey-8 text-weight-bold'
        "
        class="text-h6"
      >
        {{ transaction.amount > 0 ? '+' : '-' }} S$ {{ Math.abs(transaction.amount) }}
      </q-item-label>
      <q-icon name="chevron_right" color="grey-4" size="sm" class="q-mt-xs" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import type { Transaction } from '../../types';

defineProps<{
  transaction: Transaction;
}>();
</script>

<style scoped>
.transaction-item {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-type {
  display: flex;
  align-items: center;
}

.transaction-amount {
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
}
</style>
