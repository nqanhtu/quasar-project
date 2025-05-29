<template>
  <div class="card-details">
    <div class="thru">Thru: 12/20</div>
    <div class="cvv">CVV: <span class="cvv-value">***</span></div>
  </div>
  <div class="logo-visa"><IconVisa /></div>
</template>

<script setup lang="ts">
import IconVisa from './icons/IconVisa.vue';
defineProps<{
  expiry: string;
  cvv: string;
  showCvv: boolean;
}>();
</script>
<style>
.card-details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.card-details .thru,
.card-details .cvv {
  line-height: 1.6;
}

.logo-visa {
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
}
</style>
