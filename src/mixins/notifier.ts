import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFY } from "@/store/mutationTypes"

export const notificationMixin = {
  methods: {
    notify(title: string, message: string, type: NotificationType): void {
      store.commit(NOTIFY, {
        title,
        message,
        type,
      })
    },
  }
}