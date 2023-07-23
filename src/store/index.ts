import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { uuid } from "vue-uuid";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, CONFIRM, NOTIFY, REMOVE_PROJECT, UPDATE_PROJECT } from "./mutationTypes";
import { INotification } from "@/interfaces/INotification";
import { IConfirm } from "@/interfaces/IConfirm";

interface State {
  projects: IProject[],
  notifications: INotification[],
  confirm: IConfirm,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [],
    confirm: {} as IConfirm,
  },
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: uuid.v4(),
        name: projectName,
        createdAt: new Date(),
      } as IProject
      state.projects.push(project)
    },
    [UPDATE_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id)
      state.projects[index].name = project.name
      state.projects[index].updatedAt = new Date()
    },
    [REMOVE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(proj => proj.id !== id)
    },
    [NOTIFY](state, newNotification: INotification) {
      newNotification.id = new Date().getTime()
      state.notifications.push(newNotification)

      setTimeout(() => {
        state.notifications = state.notifications.filter(notif => notif.id !== newNotification.id)
      }, 3000);
    },
    [CONFIRM](state, newConfirm: IConfirm) {
      state.confirm = newConfirm
    },
  },
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}