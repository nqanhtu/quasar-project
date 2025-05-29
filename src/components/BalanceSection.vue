<template>
  <div class="rounded-borders">
    <div class="row items-center justify-between">
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
      <NewCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import NewCard from './NewCard.vue';

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

.new-card {
  font-weight: bold;
  font-size: 13px;
  margin-left: 8px;
}
</style>
