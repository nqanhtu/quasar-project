<template>
  <q-item class="q-pa-none q-mb-md">
    <q-item-section avatar>
      <q-avatar :color="transaction.iconColor" text-color="white" size="sm">
        <q-icon :name="transaction.icon" size="xs" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-weight-medium">{{ transaction.merchant }}</q-item-label>
      <q-item-label caption>{{ transaction.date }}</q-item-label>
      <q-item-label caption class="text-primary">
        <q-icon name="credit_card" size="xs" class="q-mr-xs" />
        {{ transaction.type }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-item-label
        :class="transaction.amount > 0 ? 'text-green' : 'text-grey-8'"
        class="text-weight-medium"
      >
        {{ transaction.amount > 0 ? '+' : '-' }} S$ {{ Math.abs(transaction.amount) }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import type { Transaction } from '../types';

defineProps<{
  transaction: Transaction;
}>();
</script>
