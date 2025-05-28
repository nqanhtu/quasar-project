<template>
  <q-list class="navigation-menu">
    <q-item
      v-for="item in menuItems"
      :key="item.label"
      clickable
      :active="item.active"
      active-class="menu-item-active"
      class="menu-item q-mb-sm q-pa-none no-hover-effect"
      @click="$emit('menu-selected', item.label)"
    >
      <q-item-section class="menu-item-section" avatar>
        <q-icon :color="item.active ? 'primary' : 'white'" size="sm">
          <component :is="item.icon" />
        </q-icon>
      </q-item-section>
      <q-item-section class="text-body1 menu-item-label">
        {{ item.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import type { MenuItem } from '../types';

defineProps<{
  menuItems: MenuItem[];
}>();

defineEmits<{
  'menu-selected': [label: string];
}>();
</script>

<style scoped>
.navigation-menu {
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.menu-item {
  border-radius: 8px;
  transition: background-color 0.3s ease;
  min-height: 24px;
  height: 24px;
}

.menu-item-label {
  line-height: 32px !important;
}

.menu-item-section {
  min-width: 24px !important;
}

.menu-item-active {
  font-weight: bold;
}

.menu-item-active .menu-item-label {
  font-weight: bold;
}

.no-hover-effect {
  --q-hover: transparent;

  &:hover {
    background-color: transparent !important;
  }
  &:active {
    background-color: transparent !important;
  }
}
</style>
