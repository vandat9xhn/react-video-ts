import React from 'react'
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss'
//
import VideoZoomIcon from '../icon/VideoZoomIcon'
//
import stylesVideoZoom from './VideoZoom.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoZoom
  })
}

//
interface VideoZoomProps {
  zoom_icon_name?: string
  size_icon?: string
  is_zoom_out: boolean
  toggleZoom: () => void

  IconComponent?: typeof VideoZoomIcon
}

//
VideoZoom.propTypes = {}

//
function VideoZoom({
  zoom_icon_name = 'arrow',
  size_icon,
  is_zoom_out,
  toggleZoom,

  IconComponent = VideoZoomIcon
}: VideoZoomProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoZoom')} onClick={toggleZoom}>
      <IconComponent
        zoom_icon_name={zoom_icon_name}
        is_zoom_out={is_zoom_out}
        size_icon={size_icon}
      />
    </div>
  )
}

export default VideoZoom
