<template>
  <div class="text-h5 text-weight-medium q-mb-lg">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
