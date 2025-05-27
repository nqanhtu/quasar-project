<template>
  <div class="bg-white rounded-borders q-pa-lg q-mb-lg">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-subtitle2 text-grey-7 q-mb-xs">Available balance</div>
        <div class="flex items-center">
          <q-chip color="green" text-color="white" size="sm" class="q-mr-sm"> S$ </q-chip>
          <span class="text-h4 text-weight-bold">{{ formatBalance(balance) }}</span>
        </div>
      </div>
      <q-btn
        color="primary"
        label="New card"
        icon="add"
        unelevated
        class="q-px-lg"
        @click="$emit('new-card')"
      />
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
.rounded-borders {
  border-radius: 12px;
}
</style>
