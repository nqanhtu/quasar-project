<template>
  <div class="flex items-center q-mb-lg">
    <q-icon name="visibility" color="green" size="sm" class="q-mr-sm" />
    <span class="text-green text-weight-medium cursor-pointer toggle-text" @click="$emit('toggle')">
      {{ showCardNumber ? 'Hide' : 'Show' }} card number
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  showCardNumber: boolean;
}>();

defineEmits<{
  toggle: [];
}>();
</script>

<style scoped>
.toggle-text:hover {
  text-decoration: underline;
}
</style>
