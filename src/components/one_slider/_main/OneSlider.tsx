import React, { useRef } from 'react'
//
import { OneSliderProps } from '../../../types/one_slider'
//
import { useRangeOneSlider } from '../../../hooks/useOneSlider'
//
import OneSliderElm from '../elm/OneSliderElm'

//
function OneSlider({
  range,
  active_range,
  slider,
  value,

  only_drag_slider,
  ref_has_change_range = { current: false },
  getRangeAngel,

  callbackStart = () => {},
  handleChange,

  afterMouseDown = () => {},
  afterMousemove = () => {},
  afterMouseUp = () => {}
}: OneSliderProps) {
  //
  const ref_range_elm = useRef<HTMLDivElement>(null)

  //
  const { ref_is_run, onDown, handleClick } = useRangeOneSlider({
    ref_range_elm: ref_range_elm,
    ref_has_change_range: ref_has_change_range,

    getRangeAngel: getRangeAngel,
    handleChange: handleChange,

    afterMouseDown: afterMouseDown,
    afterMousemove: afterMousemove,
    afterMouseUp: afterMouseUp
  })

  //
  return (
    <OneSliderElm
      ref_range_elm={ref_range_elm}
      is_run={ref_is_run.current}
      only_drag_slider={only_drag_slider}
      //
      range={range}
      active_range={active_range}
      slider={slider}
      value={value}
      //
      handleClick={handleClick}
      handleStart={onDown}
    />
  )
}

export default OneSlider
