<template>
  <section>
    <strong :class="classes">{{ passedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TrackerChronometer',
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    passedTime () : string {
      return new Date(this.timeInSeconds * 1000).toISOString().substring(11, 19)
    }
  }
})
</script>

<style scoped>
.display {
  color: var(--text-primary);
}
</style>