<template>
  <div class="flex justify-between items-start q-mb-lg">
    <div class="flex items-center">
      <q-icon name="home" size="sm" class="q-mr-xs" />
      <span class="text-weight-bold">aspire</span>
    </div>
    <q-icon v-if="frozen" name="ac_unit" size="sm" color="orange" class="frozen-indicator" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  frozen: boolean;
}>();
</script>

<style scoped>
.frozen-indicator {
  background-color: orange;
  color: white;
  border-radius: 50%;
  padding: 4px;
}
</style>
