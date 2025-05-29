<template>
  <q-separator v-if="index !== 0" spaced inset />
  <q-item clickable class="q-pa-sm">
    <q-item-section avatar>
      <q-avatar :color="transaction.iconColor" text-color="white" size="48px">
        <q-img :src="transaction.icon" fit="fill" width="16px" height="16px" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold">{{ transaction.merchant }}</q-item-label>
      <q-item-label caption>{{ transaction.date }}</q-item-label>
      <q-item-label class="text-type text-bold" style="font-size: 13px">
        <q-icon name="credit_card" class="q-mr-xs" />
        {{ transaction.type }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label
        class="text-bold"
        :class="transaction.amount > 0 ? 'text-primary' : 'text-dark'"
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
  index: number;
}>();
</script>

<style>
.bg-file-storage {
  background: #009dff1a !important;
}

.bg-flights {
  background: #00d6b51a;
}

.bg-megaphone {
  background: #f251951a;
}

.text-type {
  color: #325baf !important;
}
</style>
