<template>
  <div class="card-number q-mb-md text-bold" style="letter-spacing: 4px">
    <span v-if="showFull">{{ formattedNumber }}</span>

    <div class="flex items-center" v-else>
      <span style="font-size: 24px">•••• &nbsp; •••• &nbsp; •••• &nbsp;&nbsp;</span>
      <span>{{ hiddenNumber }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  number: string;
  showFull: boolean;
}>();

const formattedNumber = computed(() => props.number.match(/.{1,4}/g)?.join('    ') ?? '');

const hiddenNumber = computed(() => {
  return props.number.slice(-4);
});
</script>

<style scoped></style>
