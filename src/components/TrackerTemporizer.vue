<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <TrackerChronometer :classes="'display'" :timeInSeconds="timeInSeconds" />
        <button class="button is-success" @click="start" :disabled="isPlaying">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button is-danger" @click="stop" :disabled="!isPlaying">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TrackerChronometer from './TrackerChronometer.vue';

export default defineComponent({
    name: "TrackerTemporizer",
    components: {
        TrackerChronometer
    },
    emits: ['onTemporizerEnds'],
    data() {
        return {
            timeInSeconds: 0,
            idInterval: 0,
            isPlaying: false
        };
    },
    methods: {
        start() {
            this.idInterval = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
            this.isPlaying = true
        },
        stop() {
            clearInterval(this.idInterval);
            this.isPlaying = false
            this.$emit('onTemporizerEnds', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }
})
</script>