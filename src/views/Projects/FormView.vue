<template>
  <section class="projects">
    <h1 class="title">{{ pageTitle }}</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">Project Name</label>
        <input type="text" class="input" v-model="projectName" id="projectName" />
      </div>
      <div class="field">
        <button class="button is-success" type="submit">Save</button>
        <router-link to="/projects" class="button ml-2">
          Cancel
        </router-link>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ADD_PROJECT, UPDATE_PROJECT } from "@/store/mutationTypes";
import { NotificationType } from "@/interfaces/INotification";
import { notificationMixin } from "@/mixins/notifier"
export default defineComponent({
  name: "FormView",
  props: {
    id: {
      type: String
    }
  },
  mixins: [
    notificationMixin,
  ],
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(proj => proj.id === this.id)
      this.projectName = project?.name ?? ''
      this.pageTitle = 'Update Project'
    }
  },
  data() {
    return {
      projectName: '',
      pageTitle: 'New Project',
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit(UPDATE_PROJECT, {
          id: this.id,
          name: this.projectName
        })
      } else {
        this.store.commit(ADD_PROJECT, this.projectName)
      }
      this.projectName = ''
      this.notify(
        'New Project',
        'Project saved successfully!',
        NotificationType.SUCCESS,
      )
      this.$router.push('/projects')
    },
  }
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}

.title {
  color: var(--text-primary);
}

.label {
  color: var(--text-primary);
}
</style>