import React from 'react'
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss'
import { getVideoTimeFromSeconds } from '../../../../utils/video_time'
//
import VideoLiveTimeDelayStyles from './VideoLiveTimeDelay.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: VideoLiveTimeDelayStyles
  })
}

//
interface VideoLiveTimeDelayProps {
  c_time: number
  total_time: number
}

//
function VideoLiveTimeDelay({ c_time, total_time }: VideoLiveTimeDelayProps) {
  //
  if (c_time >= total_time) {
    return null
  }

  //
  return (
    <div className={_getClassModuleCss('VideoLiveTimeDelay')}>
      -{getVideoTimeFromSeconds({ second: total_time - c_time })}
    </div>
  )
}

export default VideoLiveTimeDelay
