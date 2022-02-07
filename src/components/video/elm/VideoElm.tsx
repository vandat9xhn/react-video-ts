import React, { ReactElement } from 'react'
//
import { IS_MOBILE } from '../../../const'
//
import {
  handleChangeTimeType,
  handleChangeVolumeType,
  RefMainVideoType,
  RefVideoType
} from '../../../types/useVideo'
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss'
//
import VideoUtils from '../utils/VideoUtils'
import VideoItem from '../../video_components/video/VideoItem'
import VideoUtilsLayout from '../../video_components/utils_layout/VideoUtilsLayout'
//
import VideoElmStyles from './VideoElm.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({ className: className, styles: VideoElmStyles })
}

//
interface VideoElmProps {
  ref_main_video: RefMainVideoType
  ref_video_elm: RefVideoType
  face_video_elm?: ReactElement

  video: string
  size_icon_utils?: string
  total_view?: number

  is_play: boolean
  is_mute: boolean
  volume: number
  is_zoom_out: boolean
  is_hide_cursor: boolean

  c_time: number
  buffer_time: number
  total_time: number

  togglePlayPause: () => void
  toggleZoom: () => void
  toggleMute: () => void
  handleChangeVolume: handleChangeVolumeType

  handleChangeTime: handleChangeTimeType
  handleStartMoveTime: () => void
  handleEndMoveTime: () => void
}

//
function VideoElm({
  ref_main_video,
  ref_video_elm,
  face_video_elm,

  video,
  size_icon_utils = IS_MOBILE ? '16px' : '20px',
  total_view,

  is_play,
  is_mute,
  volume,
  is_zoom_out,
  is_hide_cursor,

  c_time,
  buffer_time,
  total_time,

  togglePlayPause,
  toggleZoom,
  toggleMute,
  handleChangeVolume,

  handleChangeTime,
  handleStartMoveTime,
  handleEndMoveTime
}: VideoElmProps) {
  //
  return (
    <div ref={ref_main_video} className={`${_getClassModuleCss('VideoElm')}`}>
      <VideoItem ref_video_elm={ref_video_elm} video={video} />

      <div className={`${_getClassModuleCss('VideoElm_face')}`}>
        {face_video_elm}
      </div>

      <VideoUtilsLayout
        ref_main_video={ref_main_video}
        is_hide_cursor={is_hide_cursor}
      >
        <VideoUtils
          is_play={is_play}
          is_zoom_out={is_zoom_out}
          is_mute={is_mute}
          volume={volume}
          //
          c_time={c_time}
          buffer_time={buffer_time}
          total_time={total_time}
          //
          size_icon={size_icon_utils}
          //
          togglePlayPause={togglePlayPause}
          toggleZoom={toggleZoom}
          toggleMute={toggleMute}
          handleChangeVolume={handleChangeVolume}
          //
          handleChangeTime={handleChangeTime}
          handleStartMoveTime={handleStartMoveTime}
          handleEndMoveTime={handleEndMoveTime}
        />
      </VideoUtilsLayout>
    </div>
  )
}

export default VideoElm
