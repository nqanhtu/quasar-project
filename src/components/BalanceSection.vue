<template>
  <div class="bg-white rounded-borders">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-subtitle2 balance-text">Available balance</div>
        <div class="flex items-center balance-value">
          <q-chip
            color="primary"
            square
            text-color="white"
            size="13px"
            class="text-bold q-ma-none balance-dollar"
          >
            S$
          </q-chip>
          <span class="text-weight-bold" :style="{ fontSize: '26px' }">{{
            formatBalance(balance)
          }}</span>
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

<style lang="scss" scoped>
.rounded-borders {
  border-radius: 12px;
}

.balance-text {
  color: $text-primary;
}

.balance-value {
  margin-top: 9;
  gap: 12px;
}

.balance-dollar {
  line-height: 16px;
  padding: 2px 13px;
}
</style>
