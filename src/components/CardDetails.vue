<template>
  <div class="row justify-between items-end">
    <div class="col">
      <div class="text-caption">Thru: {{ expiry }}</div>
      <div class="text-caption">CVV: {{ showCvv ? cvv : '***' }}</div>
    </div>
    <div class="col-auto">
      <div class="text-h6 text-weight-bold">VISA</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  expiry: string;
  cvv: string;
  showCvv: boolean;
}>();
</script>
