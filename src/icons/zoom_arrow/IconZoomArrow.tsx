import React from 'react'
//
import stylesIconZoomArrow from './IconZoomArrow.scss'

//
interface IconZoomArrowProps {
  class_icon?: string
  x?: number
  y?: number
  size_icon?: string

  stroke?: string
  stroke_width?: number

  zoom_out?: boolean
}

//
function IconZoomArrow({
  class_icon = '',
  x = 0,
  y = 0,
  size_icon = '1rem',

  stroke = 'currentColor',
  stroke_width = 5,

  zoom_out = false
}: IconZoomArrowProps) {
  //
  return (
    <svg
      className={`IconZoomArrow ${class_icon} ${
        zoom_out
          ? `IconZoomArrow-out ${stylesIconZoomArrow['IconZoomArrow-out']}`
          : `IconZoomArrow-in ${stylesIconZoomArrow['IconZoomArrow-in']}`
      }`}
      viewBox={`${x} ${y} 200 200`}
      width={size_icon}
      height={size_icon}
      //
      stroke={stroke}
      fill={stroke}
      strokeWidth={stroke_width}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        className={`IconZoomArrow_top ${stylesIconZoomArrow['IconZoomArrow_top']}`}
        d='M117.705 82.2416H180.755L180.328 66.1516L152.096 60.5267L182.705 29.8436L170.355 17.2416L139.636 48.0355L133.172 18.5939L118.083 19.0373L117.705 82.2416Z'
      />

      <path
        className={`IconZoomArrow_bot ${stylesIconZoomArrow['IconZoomArrow_bot']}`}
        d='M80.1741 119.772H17.1241L17.5504 135.862L45.7822 141.487L15.1741 172.17L27.5241 184.772L58.2429 153.978L64.707 183.42L79.7953 182.976L80.1741 119.772Z'
      />
    </svg>
  )
}

export default IconZoomArrow
