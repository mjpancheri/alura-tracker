<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Alura Tracker logo">
    </h1>
    <div class="has-text-centered">
      <label class="checkbox" :title="buttonText">
        <input type="checkbox" @click="toggleTheme" checked>
        Dark Mode
      </label>
      <!-- <button class="button" @click="toggleTheme">{{ buttonText }}</button> -->
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tasks
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            projects
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  emits: ['onChangeTheme'],
  data () {
    return {
      isDarkModeActive: true
    }
  },
  computed: {
    buttonText () {
      return this.isDarkModeActive ? 'Light Mode' : 'Dark Mode'
    }
  },
  methods: {
    toggleTheme () {
      this.isDarkModeActive = !this.isDarkModeActive
      this.$emit('onChangeTheme', this.isDarkModeActive)
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link, label {
  color: #fff;
}
.link:hover, label:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>