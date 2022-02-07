import React from 'react'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
//
import IconsPlayPause from '../../../icons/play_pause/IconsPlayPause'
//
import stylesVideoPause from './VideoPause.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoPause
  })
}

//
interface VideoPauseProps {
  is_play: boolean
  size_icon?: string
  color?: string
  togglePlayPause: () => void
}

//
function VideoPause({
  is_play,
  size_icon,
  color,
  togglePlayPause
}: VideoPauseProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoPause')} onClick={togglePlayPause}>
      <IconsPlayPause
        x={is_play ? 200 : 0}
        size_icon={size_icon}
        color={color}
      />
    </div>
  )
}

export default VideoPause
