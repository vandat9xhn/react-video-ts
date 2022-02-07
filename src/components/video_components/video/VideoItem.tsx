import React from 'react'
//
import { RefElmType } from '../../../types/_common'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
//
import stylesVideoItem from './VideoItem.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoItem
  })
}

//
interface VideoItemProps {
  ref_video_elm: RefElmType<HTMLVideoElement>
  video: string
}

//
function VideoItem({ ref_video_elm, video }: VideoItemProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoItem')}>
      <video
        ref={ref_video_elm}
        className={_getClassModuleCss('VideoItem_video')}
        src={video}
        controls={false}
        preload='metadata'
      />
    </div>
  )
}

export default VideoItem
