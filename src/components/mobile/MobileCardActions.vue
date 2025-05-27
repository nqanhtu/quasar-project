<template>
  <div class="mobile-card-actions q-mt-lg q-mb-lg">
    <div class="actions-container bg-white rounded-borders q-pa-md">
      <div class="actions-grid">
        <div
          v-for="action in cardActions"
          :key="action.label"
          class="action-item"
          @click="handleAction(action.label)"
        >
          <div class="action-icon-container">
            <q-icon :name="action.icon" size="md" :color="action.color || 'primary'" />
          </div>
          <div class="action-label">{{ action.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CardAction } from '../../types';

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
.rounded-borders {
  border-radius: 16px;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: center;
}

.action-item {
  cursor: pointer;
  padding: 0.5rem;
}

.action-icon-container {
  margin-bottom: 0.5rem;
}

.action-label {
  font-size: 12px;
  color: #1976d2;
  font-weight: 500;
  line-height: 1.2;
}
</style>
