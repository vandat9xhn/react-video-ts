import React from 'react'
//
import { IS_MOBILE } from '../../../const'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
import { getVideoTimeFromSeconds } from '../../../utils/video_time'
//
import stylesVideoTimeTotalTime from './VideoTimeTotalTime.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoTimeTotalTime
  })
}

//
interface VideoTimeTotalTimeProps {
  c_time: number
  total_time: number
}

//
function VideoTimeTotalTime({ c_time, total_time }: VideoTimeTotalTimeProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoTimeTotalTime')}>
      {IS_MOBILE
        ? getVideoTimeFromSeconds({ second: total_time - c_time })
        : `${getVideoTimeFromSeconds({
            second: c_time
          })} : ${getVideoTimeFromSeconds({ second: total_time })}`}
    </div>
  )
}

export default VideoTimeTotalTime
