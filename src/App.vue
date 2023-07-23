<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @on-change-theme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <NotificationCard />
      <ConfirmCard />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import NotificationCard from './components/NotificationCard.vue';
import ConfirmCard from './components/ConfirmCard.vue';

export default defineComponent({
  name: "App",
  components: { SideBar, NotificationCard, ConfirmCard },
  data() {
    return {
      isDarkModeActive: true
    }
  },
  methods: {
    changeTheme(isDarkModeActive: boolean) {
      this.isDarkModeActive = isDarkModeActive
    }
  }
});
</script>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.list {
  padding: 1.25rem;
}

.content {
  background-color: var(--bg-primary);
}
</style>
