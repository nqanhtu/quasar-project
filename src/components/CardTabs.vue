<template>
  <q-tabs
    v-model="cardTab"
    dense
    class="text-grey-8 my-custom-tabs"
    active-color="dark"
    active-class="active-tab"
    indicator-color="positive"
    align="left"
    narrow-indicator
  >
    <q-tab name="my-cards" class="q-pa-none q-mr-lg" no-caps label="My debit cards" />
    <q-tab name="company-cards" class="q-pa-none" no-caps label="All company cards" />
  </q-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardTab = ref('my-cards');
</script>

<style lang="scss">
.active-tab .q-tab__label {
  font-weight: bold;
}
</style>
