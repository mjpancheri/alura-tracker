<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Form to create new tasks">
        <input type="text" class="input" placeholder="Which task do you want to start?" v-model="description">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject" id="idProject">
            <option value="">Choose a project</option>
            <option v-for="project in projects" :value="project.id" :key="project.id">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TrackerTemporizer @on-temporizer-ends="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TrackerTemporizer from './TrackerTemporizer.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
    name: "FormTracker",
    emits: ['onSaveTask'],
    components: {
      TrackerTemporizer
    },
    data() {
        return {
            description: '',
            idProject: '',
        };
    },
    setup() {
      const store = useStore(key)
      return {
        projects: computed(() => store.state.projects)
      }
    },
    methods: {
        finishTask(passedTime: number): void {
          this.$emit('onSaveTask', {
            durationInSeconds: passedTime,
            description: this.description,
            project: this.projects.find(proj => proj.id === this.idProject),
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