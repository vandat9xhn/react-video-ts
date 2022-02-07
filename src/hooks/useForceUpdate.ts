import { useState } from 'react'

//
export const useForceUpdate = () => {
  const [_, setForceUpdate] = useState(false)
  //
  function forceUpdate() {
    setForceUpdate((force_update) => !force_update)
  }

  return forceUpdate
}
