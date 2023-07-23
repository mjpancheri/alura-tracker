<template>
  <div class="notification p-2">
    <article :class="`message ${notification.type}`" v-for="notification in notifications" :key="notification.id">
      <div class="message-header">
        {{ notification.title }}
      </div>
      <div class="message-body">
        {{ notification.message }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue"

export default defineComponent({
  name: 'NotificationCard',
  setup() {
    const store = useStore()
    return {
      notifications: computed(() => store.state.notifications)
    }
  }
})
</script>

<style scoped>
.notification {
  background-color: var(--bg-primary);
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 9999;
}
</style>