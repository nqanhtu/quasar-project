<template>
  <div class="text-h5 text-bold q-mb-lg">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
