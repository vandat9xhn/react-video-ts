import { useRef } from 'react'
//
import { IS_MOBILE } from '../const'
//
import { ReactMouseEventType } from '../types/_common'
//
import { useMouseDownToWindowUpType } from '../types/mousedown'

//
function detectNoTouch(e: React.TouchEvent) {
  return e.touches.length == 0
}

//
function detectHasTouch(e: React.TouchEvent) {
  return e.touches.length > 0
}

//
export function useMouseDownToWindowUp({
  handleDown = () => {},
  handleMove = () => {},
  handleEnd = () => {},

  detectEndTouch = detectNoTouch,
  detectStartTouch = detectHasTouch
}: useMouseDownToWindowUpType) {
  //
  const ref_func_move = useRef<null | ((e: ReactMouseEventType) => void)>(null)
  const ref_func_up = useRef<null | ((e: ReactMouseEventType) => void)>(null)

  //
  function onDown(e: ReactMouseEventType) {
    handleDown(e)

    if (!ref_func_move.current) {
      ref_func_move.current = onMove
    }
    if (!ref_func_up.current) {
      ref_func_up.current = onUp
    }

    if (IS_MOBILE) {
      if (detectStartTouch(e)) {
        window.addEventListener('touchmove', ref_func_move.current)
        window.addEventListener('touchend', ref_func_up.current)
      }
    } else {
      window.addEventListener('mousemove', ref_func_move.current)
      window.addEventListener('mouseup', ref_func_up.current)
    }
  }

  //
  function onMove(e: ReactMouseEventType) {
    handleMove(e)
  }

  //
  function onUp(e: ReactMouseEventType) {
    handleEnd(e)

    if (IS_MOBILE) {
      if (detectEndTouch(e)) {
        ref_func_move.current &&
          window.removeEventListener('touchmove', ref_func_move.current)
        ref_func_up.current &&
          window.removeEventListener('touchend', ref_func_up.current)
      }
    } else {
      ref_func_move.current &&
        window.removeEventListener('mousemove', ref_func_move.current)
      ref_func_up.current &&
        window.removeEventListener('mouseup', ref_func_up.current)
    }

    ref_func_move.current = null
    ref_func_up.current = null
  }

  //
  return {
    onDown
  }
}
