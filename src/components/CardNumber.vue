<template>
  <div class="card-number q-mb-md text-bold">
    <span v-if="showFull">{{ number }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string;
  showFull: boolean;
}>();
</script>

<style scoped></style>
