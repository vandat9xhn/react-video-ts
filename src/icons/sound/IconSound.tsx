import React from 'react'
//
import styles from '../../styles.module.css'

//
interface IconSoundProps {
  class_icon?: string
  x?: number
  y?: number
  size_icon?: string

  color?: string
  stroke_width?: number

  is_mute?: boolean
  is_too_low?: boolean
  is_high?: boolean
}

//
function IconSound({
  class_icon = '',
  x = 0,
  y = 0,
  size_icon = '1rem',

  color = 'currentColor',
  stroke_width = 10,

  is_mute = false,
  is_too_low = false,
  is_high = false
}: IconSoundProps) {
  //
  return (
    <svg
      className={`IconSound ${class_icon}`}
      viewBox={`${x} ${y} 200 200`}
      width={size_icon}
      height={size_icon}
      //
      strokeWidth={stroke_width}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        fill={color}
        d='M27.0796 72.1164H50.2065L106.372 35.7526C109.634 34.3502 110.729 34.8539 111.563 37.7182V161.06C111.576 165.488 110.266 165.728 106.372 164.009L50.2065 126.662H27.0796C21.8852 126.852 20.3052 125.382 20 119.782V79.4874C20.5739 73.9936 22.1124 72.3657 27.0796 72.1164Z'
      />

      <g fill='none'>
        <path
          stroke={color}
          className={`${is_mute ? '' : styles['display-none']}`}
          d='M129.97 78.996L180 130.593M180 78.996L129.97 130.593'
        />

        <path
          stroke={color}
          className={`${is_mute || is_too_low ? styles['display-none'] : ''}`}
          d='M137.522 73.0992C156.078 88.8609 155.027 122.093 137.522 136.982'
          strokeLinecap='square'
        />

        <path
          stroke={color}
          className={`${is_mute || !is_high ? styles['display-none'] : ''}`}
          d='M154.513 58.3571C180 81.4531 181.416 127.645 154.513 151.724'
          strokeLinecap='square'
        />
      </g>
    </svg>
  )
}

export default IconSound
