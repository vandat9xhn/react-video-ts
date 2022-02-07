import React from 'react'

//
interface IconsPlayPauseProps {
  size_icon?: string
  x?: number
  y?: number
  color?: string
}

//
function IconsPlayPause({
  size_icon = '1.5rem',
  x = 0,
  y = 0,
  color = 'white'
}: IconsPlayPauseProps) {
  //
  return (
    <svg
      className='IconsPlayPause'
      viewBox={`${x} ${y} 200 200`}
      width={size_icon}
      height={size_icon}
    >
      {/* play x=0 y=0*/}
      <g className='IconsPlayPause_play' fill={color}>
        <path d='M45,25 155,100 45,175 Z' />
      </g>

      {/* pause x=200 y=0*/}
      <g className='IconsPlayPause_pause' stroke={color} strokeWidth='25'>
        <line x1='270' y1='25' x2='270' y2='175' />

        <line x1='330' y1='25' x2='330' y2='175' />
      </g>
    </svg>
  )
}

export default IconsPlayPause
