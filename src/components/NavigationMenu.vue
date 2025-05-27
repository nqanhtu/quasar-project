<template>
  <q-list class="navigation-menu">
    <q-item
      v-for="item in menuItems"
      :key="item.label"
      clickable
      v-ripple
      :active="item.active"
      class="menu-item q-mb-sm"
      @click="$emit('menu-selected', item.label)"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" size="sm" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-medium">{{ item.label }}</q-item-label>
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
.menu-item {
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-item.q-item--active {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
