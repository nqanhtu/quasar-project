<template>
  <div class="card-number q-mb-md">
    <span v-if="showFull">{{ number }}</span>
    <span v-else>•••• •••• •••• {{ lastFour }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string;
  lastFour: string;
  showFull: boolean;
}>();
</script>

<style scoped>
.card-number {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  letter-spacing: 2px;
}
</style>
