<template>
  <div class="card-actions flex q-mt-md justify-center">
    <q-btn
      v-for="action in cardActions"
      :key="action.label"
      flat
      dense
      class="card-action-btn col text-center"
      :color="action.color || 'primary'"
      no-caps
      @click="handleAction(action.label)"
    >
      <div class="column items-center">
        <q-icon :name="action.icon" size="md" class="q-mb-xs" />
        <div class="text-caption text-action" v-if="cardInfo">
          {{
            action.label === 'Freeze card'
              ? cardInfo.frozen
                ? 'Unfreeze card'
                : 'Freeze card'
              : action.label
          }}
        </div>
      </div>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CardAction } from '../types';
import { useCardStore } from 'src/stores/cardStore';

const cardActions = ref<CardAction[]>([
  { label: 'Freeze card', icon: 'img:icons/freeze-card.svg', color: 'blue' },
  { label: 'Set spend limit', icon: 'img:icons/set-spend-limit.svg', color: 'blue' },
  { label: 'Add to GPay', icon: 'img:icons/g-pay.svg', color: 'blue' },
  { label: 'Replace card', icon: 'img:icons/replace-card.svg', color: 'blue' },
  { label: 'Cancel card', icon: 'img:icons/deactivate-card.svg', color: 'blue' },
]);

const props = defineProps<{
  cardId: number;
}>();

const cardStore = useCardStore();

const cardInfo = computed(() => {
  return cardStore.cards.find((c) => c.id === props.cardId);
});

const handleAction = (actionLabel: string) => {
  console.log(`Action clicked: ${actionLabel}`);

  if (actionLabel === 'Freeze card') {
    cardStore.toggleFreeze(props.cardId);
  }
};
</script>

<style lang="scss" scoped>
.card-actions {
  margin-top: 1rem;
  background: #edf3ff;
  border-radius: 16px;
  width: 414px;
}

.card-action-btn {
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 12px;
  min-width: 80px;
}

.card-action-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.text-action {
  color: $text-secondary;
}
</style>
