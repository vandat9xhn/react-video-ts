import React from 'react'
//
import styles from '../../styles.module.css'

//
interface IconsEyeProps {
  x?: number
  y?: number
  size_icon?: string
  close_eye?: boolean
}

/**
    IconsEye: (x, y)
        1. Eye show password: (200, 200)
*/
function IconsEye({
  x = 200,
  y = 200,
  size_icon = '1.5rem',
  close_eye = true
}: IconsEyeProps) {
  //
  return (
    <svg
      className='IconsEye'
      height={size_icon}
      width={size_icon}
      viewBox={`${x} ${y} 200 200`}
      // stroke='black'
      // fill='black'
      strokeLinecap='round'
    >
      {/* Eye for showing password x=200 y=200 Toggle:close_eye */}
      <path
        d='M200,300 Q300,200 400,300 Q300,400 200,300'
        fill='none'
        strokeWidth='10'
      />
      <circle
        className={`IconsEye_in ${close_eye ? styles['display-none'] : ''}`}
        cx='300'
        cy='300'
        r='30'
      />
      <g className={close_eye ? '' : styles['display-none']}>
        <path d='M200,300 Q300,350 400,300' fill='none' strokeWidth='20' />
        <line x1='210' y1='210' x2='390' y2='390' strokeWidth='30' />
      </g>
    </svg>
  )
}

export default IconsEye
