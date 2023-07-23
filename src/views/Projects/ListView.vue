<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <router-link to="projects/new" class="button is-info">
      <span class="icon is-small mr-2">
        <i class="fas fa-plus"></i>
      </span>
      New Project
    </router-link>
    <table class="table is-fullwidth mt-3">
      <caption>List of projects</caption>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>created</th>
          <th>updated</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>{{ project.createdAt.toLocaleString() }}</td>
          <td>{{ project.updatedAt?.toLocaleString() || '-' }}</td>
          <td>
            <router-link :to="`projects/${project.id}`" class="button is-info">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button @click="confirmRemove(project.id)" class="button is-danger ml-2 js-modal-trigger"
              data-target="modal-js-remove">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { REMOVE_PROJECT } from "@/store/mutationTypes";
import useNotifier from "@/hooks/notifier";
import useConfirmer from "@/hooks/confirmer";
import { NotificationType } from "@/interfaces/INotification";

export default defineComponent({
  name: "ListView",
  data() {
    return {
      idToRemove: '',
      isActive: false,
    }
  },
  setup() {
    const store = useStore()
    const { notify } = useNotifier()
    const { confirm, cancel } = useConfirmer()

    return {
      store,
      notify,
      confirm,
      cancel,
      projects: computed(() => store.state.projects),
    }
  },
  methods: {
    confirmRemove(id: string) {
      this.idToRemove = id
      this.confirm(true, 'Are you really want to remove this project?', this.remove)
    },
    remove() {
      this.store.commit(REMOVE_PROJECT, this.idToRemove)
      this.notify('Remove Project', 'Project removed successfully!', NotificationType.SUCCESS)
      this.idToRemove = ''
      this.cancel()
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

caption {
  color: var(--text-primary);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1rem;
}

td {
  font-size: small;
}

.is-active {
  display: block;
}
</style>