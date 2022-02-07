import React from 'react'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
//
import IconsEye from '../../../icons/eye/IconsEye'
//
import VideoLiveViewStyles from './VideoLiveView.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: VideoLiveViewStyles
  })
}

//
interface VideoLiveViewProps {
  is_live_view: boolean
  total_view: number
}

//
function VideoLiveView({ is_live_view, total_view }: VideoLiveViewProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoLiveView')}>
      <div
        className={`${_getClassModuleCss('VideoLiveView_title')} ${
          is_live_view ? _getClassModuleCss('VideoLiveView_title-live') : ''
        }`}
      >
        LIVE
      </div>

      <div className={_getClassModuleCss('VideoLiveView_view')}>
        <IconsEye size_icon='13px' close_eye={false} />

        <div className={_getClassModuleCss('VideoLiveView_count')}>
          {total_view}
        </div>
      </div>
    </div>
  )
}

export default VideoLiveView
