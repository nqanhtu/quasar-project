<template>
  <q-drawer
    :model-value="drawerOpen"
    @update:model-value="$emit('update:drawerOpen', $event)"
    bordered
    behavior="desktop"
    class="sidebar-drawer"
    :width="280"
  >
    <div class="q-pa-lg">
      <SidebarHeader />
      <NavigationMenu :menuItems="menuItems" @menu-selected="$emit('menu-selected', $event)" />
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import SidebarHeader from './SidebarHeader.vue';
import NavigationMenu from './NavigationMenu.vue';
import type { MenuItem } from '../types';

defineProps<{
  drawerOpen: boolean;
  menuItems: MenuItem[];
}>();

defineEmits<{
  'update:drawerOpen': [value: boolean];
  'menu-selected': [label: string];
}>();
</script>

<style>
.sidebar-drawer {
  background: #0c365a !important;
  color: #fff;
}
</style>
