import { ReactElement } from 'react';
import { ReactMouseEventType, RefDivElmType, UseRefType } from './_common'

//
interface OneSliderCommonType {
  only_drag_slider?: boolean

  range?: ReactElement
  active_range?: ReactElement
  slider?: ReactElement
  value: number
}

//
export interface OneSliderFunc {
  getRangeAngel?: () => number
  handleChange: (value: number) => void

  afterMouseDown?: () => void
  afterMousemove?: () => void
  afterMouseUp?: () => void
}

// -----

//
export interface OneSliderElmProps extends OneSliderCommonType {
  ref_range_elm: RefDivElmType
  is_run: boolean

  handleClick: (e: ReactMouseEventType) => void
  handleStart: (e: ReactMouseEventType) => void
}

//
export interface OneSliderProps extends OneSliderCommonType, OneSliderFunc {
  ref_has_change_range?: UseRefType<boolean>
  callbackStart?: () => void
}

// hook

//
export interface useOneSliderProps extends OneSliderFunc {
  ref_range_elm: RefDivElmType
  ref_has_change_range: UseRefType<boolean>
}
