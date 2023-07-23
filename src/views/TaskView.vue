<template>
  <FormTracker @on-save-task="saveTask" />
  <div class="list">
    <TaskList v-for="(task, index) in tasks" :key="index" :task="task" />
    <TaskBox v-if="isTaskListEmpty">
      Are you ready to do a new task?
    </TaskBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormTracker from "@/components/FormTracker.vue";
import TaskList from "@/components/TaskList.vue";
import TaskBox from "@/components/TaskBox.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
    name: "TaskView",
    components: { FormTracker, TaskList, TaskBox },
    data () {
      return {
        tasks: [] as ITask[],
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
      }
    }
});
</script>
