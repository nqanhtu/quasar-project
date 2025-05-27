<template>
  <div class="card-actions row q-gutter-sm q-mt-md justify-center">
    <q-btn
      v-for="action in cardActions"
      :key="action.label"
      flat
      dense
      class="card-action-btn col text-center"
      :color="action.color || 'primary'"
      @click="handleAction(action.label)"
    >
      <div class="column items-center">
        <q-icon :name="action.icon" size="md" class="q-mb-xs" />
        <div class="text-caption">{{ action.label }}</div>
      </div>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CardAction } from '../types';

const cardActions = ref<CardAction[]>([
  { label: 'Freeze card', icon: 'ac_unit', color: 'blue' },
  { label: 'Set spend limit', icon: 'tune', color: 'blue' },
  { label: 'Add to GPay', icon: 'phone_android', color: 'blue' },
  { label: 'Replace card', icon: 'autorenew', color: 'blue' },
  { label: 'Cancel card', icon: 'delete', color: 'blue' },
]);

const handleAction = (actionLabel: string) => {
  console.log(`Action clicked: ${actionLabel}`);
};
</script>

<style scoped>
.card-actions {
  margin-top: 1rem;
}

.card-action-btn {
  flex-direction: column;
  padding: 1rem 0.5rem;
  border-radius: 12px;
  min-width: 80px;
}

.card-action-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
