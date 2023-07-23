import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFY } from "@/store/mutationTypes"

type Notifier = {
  notify: (title: string, message: string, type: NotificationType) => void
}

export default (): Notifier => {
  const notify = (title: string, message: string, type: NotificationType): void => {
    store.commit(NOTIFY, { title, message, type })
  }

  return { notify }
}
