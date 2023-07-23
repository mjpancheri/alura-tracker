<template>
  <div class="confirm m-0">
    <div id="modal-js-remove" :class="`modal${confirm.active ? ' is-active' : ''}`">
      <div class="modal-background"></div>

      <div class="modal-content">
        <div class="box">
          <p>{{ confirm.description }}</p>
          <div class="mt-3 has-text-right">
            <button class="button is-danger" @click="confirm.callback">Yes</button>
            <button class="button" @click="cancel">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue"

export default defineComponent({
  name: 'ConfirmCard',
  setup() {
    const store = useStore()
    return {
      confirm: computed(() => store.state.confirm)
    }
  },
  methods: {
    cancel() {
      this.confirm.active = false
    },
  },
})
</script>

<style scoped>
.confirm {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>