<template>
  <div class="flex items-center justify-end">
    <q-icon name="visibility" color="primary" size="16px" class="q-mr-sm" />
    <span
      class="text-primary text-caption text-bold cursor-pointer toggle-text"
      @click="$emit('toggle')"
    >
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
