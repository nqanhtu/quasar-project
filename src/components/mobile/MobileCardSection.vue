<template>
  <div class="mobile-card-section">
    <!-- Card Tabs -->
    <div class="card-tabs q-mb-lg">
      <div class="tab-buttons">
        <button
          class="tab-button active text-white"
          :class="{ active: activeTab === 'my-cards' }"
          @click="activeTab = 'my-cards'"
        >
          My debit cards
        </button>
        <button
          class="tab-button text-grey-5"
          :class="{ active: activeTab === 'company-cards' }"
          @click="activeTab = 'company-cards'"
        >
          All company cards
        </button>
      </div>
    </div>

    <!-- Show Card Number Toggle -->
    <div class="text-right q-mb-md">
      <q-btn
        flat
        no-caps
        color="white"
        icon="visibility"
        label="Show card number"
        class="show-card-btn"
        @click="$emit('toggle-card-number')"
      />
    </div>

    <!-- Mobile Credit Card -->
    <div class="mobile-credit-card">
      <div class="card-container">
        <div class="card-gradient q-pa-lg text-white">
          <!-- Card Header -->
          <div class="flex justify-between items-start q-mb-lg">
            <div class="flex items-center">
              <q-icon name="home" size="sm" class="q-mr-xs" />
              <span class="text-weight-bold text-h6">aspire</span>
            </div>
          </div>

          <!-- Card Holder Name -->
          <div class="text-h4 text-weight-medium q-mb-xl">
            {{ cardInfo.cardHolder }}
          </div>

          <!-- Card Number -->
          <div class="card-number q-mb-lg">
            <span v-if="showCardNumber">{{ cardInfo.cardNumber }}</span>
          </div>

          <!-- Card Details -->
          <div class="row justify-between items-end">
            <div class="col">
              <div class="card-detail-text">Thru: {{ cardInfo.expiry }}</div>
              <div class="card-detail-text">CVV: {{ showCardNumber ? cardInfo.cvv : '***' }}</div>
            </div>
            <div class="col-auto">
              <div class="text-h5 text-weight-bold">VISA</div>
            </div>
          </div>
        </div>

        <!-- Card Indicator -->
        <div class="text-center q-mt-sm">
          <div class="card-indicator active"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CardInfo } from '../../types';

defineProps<{
  cardInfo: CardInfo;
  showCardNumber: boolean;
}>();

defineEmits<{
  'toggle-card-number': [];
}>();

const activeTab = ref('my-cards');
</script>

<style scoped>
.tab-buttons {
  display: flex;
  gap: 2rem;
}

.tab-button {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 0 0 8px 0;
  cursor: pointer;
}

.tab-button.active {
  border-bottom: 2px solid white;
}

.show-card-btn {
  font-size: 14px;
}

.card-gradient {
  background: linear-gradient(135deg, #00d4aa 0%, #00b894 100%);
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 8px 32px rgba(0, 212, 170, 0.3);
}

.card-number {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  letter-spacing: 3px;
}

.card-detail-text {
  font-size: 14px;
  opacity: 0.9;
}

.card-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.card-indicator.active {
  background: white;
}
</style>
