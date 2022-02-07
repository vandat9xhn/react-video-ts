import { useRef, useState } from 'react'
//
import { useMounted } from './useMounted'

//
export function useHold({
  time = 500,
  use_holding = false,
  time_holding_start = 100
}) {
  //
  const [holding, setHolding] = useState(false)

  //
  const timeout = useRef<null | NodeJS.Timeout>(null)
  const timeout_holding = useRef<null | NodeJS.Timeout>(null)

  //
  const mounted = useMounted()

  // ------

  //
  function StartHold(callback = function () {}) {
    timeout_holding.current = setTimeout(() => {
      if (!mounted) {
        return
      }

      use_holding && setHolding(true)
      handleHolding(callback)
    }, time_holding_start)
  }

  //
  function handleHolding(callback = function () {}) {
    timeout.current = setTimeout(() => {
      if (!mounted) {
        return
      }

      use_holding && setHolding(false)
      timeout_holding.current && clearTimeout(timeout_holding.current)
      callback()
    }, time)
  }

  function StopHold() {
    use_holding && setHolding(false)
    timeout_holding.current && clearTimeout(timeout_holding.current)
    timeout.current && clearTimeout(timeout.current)
  }

  return { holding, StartHold, StopHold }
}
