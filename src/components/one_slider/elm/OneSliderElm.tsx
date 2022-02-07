import React from 'react'
//
import { IS_MOBILE } from '../../../const'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
//
import { OneSliderElmProps } from '../../../types/one_slider'
//
import OneSliderElmStyles from './OneSliderElm.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({ className: className, styles: OneSliderElmStyles })
}

//
function OneSliderElm({
  ref_range_elm,
  is_run,
  only_drag_slider = true,

  range,
  active_range,
  slider,
  value,

  handleClick,
  handleStart
}: OneSliderElmProps) {
  //
  return (
    <div
      ref={ref_range_elm}
      className={`${_getClassModuleCss('OneSliderElm')} ${
        is_run ? 'input-range-running' : ''
      }`}
      onMouseDown={!only_drag_slider && !IS_MOBILE ? handleStart : undefined}
      onTouchStart={!only_drag_slider && IS_MOBILE ? handleStart : undefined}
    >
      <div
        className={_getClassModuleCss('OneSliderElm_range')}
        onClick={handleClick}
      >
        {range}
      </div>

      <div
        className={_getClassModuleCss('OneSliderElm_range_active')}
        style={{ width: `${value}%` }}
      >
        {active_range}
      </div>

      <div
        className={_getClassModuleCss('OneSliderElm_slider')}
        style={{ left: `${value}%` }}
        //
        onMouseDown={only_drag_slider && !IS_MOBILE ? handleStart : undefined}
        onTouchStart={only_drag_slider && IS_MOBILE ? handleStart : undefined}
      >
        {slider}
      </div>
    </div>
  )
}

export default OneSliderElm
