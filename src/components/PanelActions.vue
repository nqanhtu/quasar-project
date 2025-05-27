<template>
  <div>
    <q-item class="q-pa-none q-mb-lg" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar color="blue-1" text-color="primary">
          <q-icon name="credit_card" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-medium">Card details</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="chevron_right" color="grey-5" />
      </q-item-section>
    </q-item>

    <q-item class="q-pa-none q-mb-lg" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar color="blue-1" text-color="primary">
          <q-icon name="receipt_long" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-medium">Recent transactions</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="chevron_right" color="grey-5" />
      </q-item-section>
    </q-item>
  </div>
</template>
