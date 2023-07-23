import { store } from "@/store"
import { CONFIRM } from "@/store/mutationTypes"

type Confirmer = {
  confirm: (active: boolean, description: string, callback: () => void) => void
  cancel: () => void
}

export default (): Confirmer => {
  const confirm = (active: boolean, description: string, callback: () => void): void => {
    store.commit(CONFIRM, { active, description, callback })
  }

  const cancel = (): void => {
    store.commit(CONFIRM, { active: false, description: '', callback: void(0) })
  }

  return { confirm, cancel }
}
