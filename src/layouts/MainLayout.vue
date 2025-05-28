<template>
  <q-layout view="lHr Lpr lFr">
    <!-- Desktop Sidebar -->
    <SidebarNavigation
      v-model:drawerOpen="leftDrawerOpen"
      :menuItems="menuItems"
      @menu-selected="setActiveMenu"
    />

    <!-- Mobile Header -->
    <q-header v-if="$q.screen.lt.md" class="mobile-header">
      <q-toolbar class="mobile-toolbar">
        <div class="mobile-status-bar">
          <div class="signal-battery">
            <span class="signal">GS</span>
            <q-icon name="signal_cellular_4_bar" size="xs" />
            <q-icon name="wifi" size="xs" />
          </div>
          <div class="time">9:41 AM</div>
          <div class="battery-section">
            <q-icon name="bluetooth" size="xs" />
            <span class="battery-percentage">58%</span>
            <q-icon name="battery_std" size="xs" />
          </div>
        </div>
        <div class="header-content q-mt-md">
          <q-btn flat round icon="keyboard_arrow_up" color="green" class="aspire-logo-btn" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page :class="$q.screen.lt.md ? 'mobile-page' : 'desktop-page'">
        <!-- Mobile Layout -->

        <div v-if="$q.screen.lt.md" class="mobile-layout">
          <MobileBalanceSection :balance="balance" @new-card="handleNewCard" />
          <MobileCardSection
            :cardInfo="cardInfo"
            :showCardNumber="showCardNumber"
            @toggle-card-number="toggleCardNumber"
          />
          <MobileCardActions />
          <MobileTransactionPanel :transactions="transactions" />
        </div>

        <!-- Desktop Layout -->
        <div v-else class="desktop-layout bg-grey-1">
          <div class="row q-gutter-lg">
            <div class="col-12 col-md-7">
              <BalanceSection :balance="balance" @new-card="handleNewCard" />
              <CardSection
                :cardInfo="cardInfo"
                :showCardNumber="showCardNumber"
                @toggle-card-number="toggleCardNumber"
              />
            </div>
            <div class="col-12 col-md-4">
              <TransactionPanel :transactions="transactions" />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <!-- Mobile Bottom Navigation -->
    <q-footer v-if="$q.screen.lt.md" class="mobile-footer">
      <MobileBottomNavigation :menuItems="menuItems" @menu-selected="setActiveMenu" />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useQuasar } from 'quasar';
import SidebarNavigation from 'src/components/SidebarNavigation.vue';
import BalanceSection from 'src/components/BalanceSection.vue';
import CardSection from 'src/components/CardSection.vue';
import TransactionPanel from 'src/components/TransactionPanel.vue';
import MobileBalanceSection from 'src/components/mobile/MobileBalanceSection.vue';
import MobileCardSection from 'src/components/mobile/MobileCardSection.vue';
import MobileCardActions from 'src/components/mobile/MobileCardActions.vue';
import MobileTransactionPanel from 'src/components/mobile/MobileTransactionPanel.vue';
import MobileBottomNavigation from 'src/components/mobile/MobileBottomNavigation.vue';
import type { MenuItem, CardInfo, Transaction } from '../types';
import IconCard from 'src/components/icons/IconCard.vue';
import IconPayments from 'src/components/icons/IconPayments.vue';
import IconAccount from 'src/components/icons/IconAccount.vue';
import IconHome from 'src/components/icons/IconHome.vue';
import IconCredit from 'src/components/icons/IconCredit.vue';

const $q = useQuasar();

const leftDrawerOpen = computed({
  get: () => !$q.screen.lt.md,
  set: () => {},
});

const showCardNumber = ref(false);
const balance = ref(3000);

const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: IconHome,
    active: false,
  },
  { label: 'Cards', icon: IconCard, active: true },
  { label: 'Payments', icon: IconPayments, active: false },
  { label: 'Credit', icon: IconCredit, active: false },
  { label: 'Settings', icon: IconAccount, active: false },
]);

const cardInfo = reactive<CardInfo>({
  holderName: 'Mark Henry',
  number: '•••• •••• •••• 2020',
  lastFour: '2020',
  expiry: '12/20',
  cvv: '***',
  frozen: true,
});

const transactions = ref<Transaction[]>([
  {
    id: 1,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'Refund on debit card',
    icon: 'store',
    iconColor: 'blue',
  },
  {
    id: 2,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'flight_takeoff',
    iconColor: 'green',
  },
  {
    id: 3,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'shopping_bag',
    iconColor: 'pink',
  },
  {
    id: 4,
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'Charged to debit card',
    icon: 'store',
    iconColor: 'blue',
  },
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
.mobile-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: white;
}

.mobile-status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
}

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

.mobile-page {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  min-height: 100vh;
  padding: 0;
}

.desktop-page {
  background: #f5f5f5;
  margin-top: 59px;
}

.mobile-layout {
  padding: 1rem;
  padding-bottom: 80px; /* Space for bottom navigation */
}

.mobile-footer {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
