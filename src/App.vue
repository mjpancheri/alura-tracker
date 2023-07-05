<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': isDarkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @on-change-theme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <FormTracker @on-save-task="saveTask" />
      <div class="list">
        <TaskList v-for="(task, index) in tasks" :key="index" :task="task" />
        <TaskBox v-if="isTaskListEmpty">
          Are you ready to do a new task?
        </TaskBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import FormTracker from './components/FormTracker.vue';
import TaskList from './components/TaskList.vue';
import TaskBox from './components/TaskBox.vue';
import ITask from '@/interfaces/ITask'

export default defineComponent({
    name: "App",
    components: { SideBar, FormTracker, TaskList, TaskBox },
    data () {
      return {
        tasks: [] as ITask[],
        isDarkModeActive: true
      }
    },
    computed: {
      isTaskListEmpty (): boolean {
        return this.tasks.length === 0
      }
    },
    methods: {
      saveTask (task: ITask) {
        this.tasks.push(task)
      },
      changeTheme (isDarkModeActive: boolean) {
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
