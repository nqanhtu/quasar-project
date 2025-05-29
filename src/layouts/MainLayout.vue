<template>
  <q-layout view="lHr Lpr lFr">
    <SidebarNavigation
      v-model:drawerOpen="leftDrawerOpen"
      :menuItems="menuItems"
      @menu-selected="setActiveMenu"
    />

    <q-page-container>
      <q-page class="desktop-page">
        <BalanceSection :balance="balance" @new-card="handleNewCard" />
        <CardSection
          :showCardNumber="showCardNumber"
          @toggle-card-number="toggleCardNumber"
          style="margin-top: 34px"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue';
import SidebarNavigation from 'src/components/SidebarNavigation.vue';
import BalanceSection from 'src/components/BalanceSection.vue';
import CardSection from 'src/components/CardSection.vue';
import type { MenuItem } from '../types';
import IconCard from 'src/components/icons/IconCard.vue';
import IconPayments from 'src/components/icons/IconPayments.vue';
import IconAccount from 'src/components/icons/IconAccount.vue';
import IconHome from 'src/components/icons/IconHome.vue';
import IconCredit from 'src/components/icons/IconCredit.vue';

const leftDrawerOpen = ref(true);

const showCardNumber = ref(false);
const balance = ref(3000);

const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: markRaw(IconHome),
    active: false,
  },
  { label: 'Cards', icon: markRaw(IconCard), active: true },
  { label: 'Payments', icon: markRaw(IconPayments), active: false },
  { label: 'Credit', icon: markRaw(IconCredit), active: false },
  { label: 'Settings', icon: markRaw(IconAccount), active: false },
]);

const setActiveMenu = (label: string) => {
  menuItems.value.forEach((item) => {
    item.active = item.label === label;
  });
};

const toggleCardNumber = () => {
  showCardNumber.value = !showCardNumber.value;
};

const handleNewCard = () => {
  console.log('Create new card');
};
</script>

<style scoped>
.signal-battery {
  display: flex;
  align-items: center;
  gap: 4px;
}

.battery-section {
  display: flex;
  align-items: center;
  gap: 4px;
}

.aspire-logo-btn {
  background: rgba(0, 212, 170, 0.2);
}

.desktop-page {
  background: #fff;
  margin-top: 59px;
  max-width: 906px;
  margin-left: auto;
  margin-right: auto;
}
</style>
