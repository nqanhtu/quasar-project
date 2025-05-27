<template>
  <div class="mobile-balance-section q-mb-lg">
    <div class="balance-header q-mb-md">
      <div class="text-white text-h6 q-mb-xs">Account balance</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <q-chip color="green" text-color="white" size="md" class="q-mr-sm balance-chip">
            S$
          </q-chip>
          <span class="text-white text-h3 text-weight-bold">{{ formatBalance(balance) }}</span>
        </div>
        <q-btn
          color="light-blue"
          text-color="white"
          icon="add"
          label="New card"
          unelevated
          rounded
          class="new-card-btn"
          @click="$emit('new-card')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  balance: number;
}>();

defineEmits<{
  'new-card': [];
}>();

const formatBalance = (amount: number): string => {
  return amount.toLocaleString();
};
</script>

<style scoped>
.balance-chip {
  font-weight: bold;
}

.new-card-btn {
  font-size: 12px;
  padding: 8px 16px;
}
</style>
