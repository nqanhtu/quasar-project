<template>
  <q-tabs
    v-model="cardTab"
    dense
    class="text-grey-8"
    active-color="primary"
    indicator-color="primary"
    align="left"
    narrow-indicator
  >
    <q-tab name="my-cards" label="My debit cards" />
    <q-tab name="company-cards" label="All company cards" />
  </q-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardTab = ref('my-cards');
</script>
