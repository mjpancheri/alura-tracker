<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Task without description' }}</div>
      <div class="column">
        <TrackerChronometer :time-in-seconds="task.durationInSeconds" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TrackerChronometer from './TrackerChronometer.vue';
import TaskBox from './TaskBox.vue';
import ITask from '@/interfaces/ITask';

export default defineComponent({
  name: 'TaskList',
  components: {
    TrackerChronometer,
    TaskBox
},
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
})
</script>