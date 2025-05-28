<template>
  <q-tabs
    v-model="activeTab"
    dense
    class="mobile-bottom-nav"
    active-color="green"
    indicator-color="transparent"
    align="justify"
  >
    <q-tab
      v-for="item in menuItems"
      :key="item.label"
      :name="item.label"
      :icon="getTabIcon(item.label)"
      :label="item.label"
      class="bottom-nav-tab"
      :class="{ 'active-tab': item.active }"
      @click="$emit('menu-selected', item.label)"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from '../../types';

defineProps<{
  menuItems: MenuItem[];
}>();

defineEmits<{
  'menu-selected': [label: string];
}>();

const activeTab = ref('Cards');

const getTabIcon = (label: string) => {
  const iconMap = {
    Home: 'home',
    Cards: 'credit_card',
    Payments: 'payments',
    Credit: 'trending_up',
    Profile: 'person',
  };
  return iconMap[label as keyof typeof iconMap] || 'help';
};
</script>

<style scoped>
.mobile-bottom-nav {
  background: white;
  min-height: 70px;
}

.bottom-nav-tab {
  min-height: 60px;
  font-size: 11px;
}

.active-tab {
  color: #00d4aa !important;
}

:deep(.q-tab__content) {
  min-height: 50px;
}

:deep(.q-tab__icon) {
  font-size: 24px;
  margin-bottom: 4px;
}

:deep(.q-tab__label) {
  font-size: 11px;
  font-weight: 500;
}
</style>
