<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Form to create new tasks">
        <input type="text" class="input" placeholder="Which task do you want to start?" v-model="description">
      </div>
      <div class="column">
        <TrackerTemporizer @on-temporizer-ends="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TrackerTemporizer from './TrackerTemporizer.vue';

export default defineComponent({
    name: "FormTracker",
    emits: ['onSaveTask'],
    components: {
      TrackerTemporizer
    },
    data() {
        return {
            description: ''
        };
    },
    methods: {
        finishTask(passedTime: number): void {
          this.$emit('onSaveTask', {
            durationInSeconds: passedTime,
            description: this.description
          })
          this.description = ''
        }
    }
})
</script>

<style>
.form {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>