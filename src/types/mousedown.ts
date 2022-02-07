import { ReactMouseEventType, ReactMouseFuncType } from './_common'

//
export interface useMouseDownToWindowUpType {
  handleDown: ReactMouseFuncType
  handleMove: ReactMouseFuncType
  handleEnd: ReactMouseFuncType

  detectEndTouch?: (e: ReactMouseEventType) => boolean
  detectStartTouch?: (e: ReactMouseEventType) => boolean
}
