<template>
  <div>
    <q-btn
      style="background: #325baf; color: white; padding-left: 12px; padding-right: 12px"
      unelevated
      @click="showDialog = true"
      no-caps
    >
      <q-icon color="white" size="xs">
        <IconBox />
      </q-icon>
      <div class="new-card q-ml-sm">New card</div>
    </q-btn>

    <q-dialog v-model="showDialog" persistent>
      <q-card class="q-pa-md" style="min-width: 300px">
        <q-card-section>
          <div class="text-h6">Add Credit Card</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="handleSubmit">
            <q-input v-model="cardHolder" label="Card holder name" filled required autofocus />
            <div class="q-gutter-sm q-mt-md">
              <q-btn label="Save" type="submit" color="primary" />
              <q-btn flat label="Cancel" color="grey" @click="showDialog = false" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCardStore } from 'src/stores/cardStore';
import IconBox from './icons/IconBox.vue';

import {
  generateRandomCVV,
  generateRandomCardNumber,
  generateRandomExpiry,
} from 'src/utils/cardUtils';

const showDialog = ref(false);
const cardHolder = ref('');
const store = useCardStore();

function handleSubmit() {
  if (!cardHolder.value.trim()) return;

  const newCard = {
    id: Date.now(),
    cardHolder: cardHolder.value,
    cardNumber: generateRandomCardNumber(),
    expiry: generateRandomExpiry(),
    cvv: generateRandomCVV(),
    frozen: false,
  };

  store.addCard(newCard);
  cardHolder.value = '';
  showDialog.value = false;
}
</script>
