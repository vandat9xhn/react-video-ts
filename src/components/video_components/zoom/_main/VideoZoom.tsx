import React from 'react'
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss'
//
import IconZoomArrow from '../../../../icons/zoom_arrow/IconZoomArrow'
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
}

//
const VideoZoomIcon = ({
  zoom_icon_name = 'arrow',
  is_zoom_out = false,
  size_icon = ''
}) => {
  //
  if (zoom_icon_name == 'arrow') {
    return <IconZoomArrow zoom_out={!is_zoom_out} size_icon={size_icon} />
  }

  //
  return <div></div>
}

//
VideoZoom.propTypes = {}

//
function VideoZoom({
  zoom_icon_name = 'arrow',
  size_icon,
  is_zoom_out,
  toggleZoom
}: VideoZoomProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoZoom')} onClick={toggleZoom}>
      <VideoZoomIcon
        zoom_icon_name={zoom_icon_name}
        is_zoom_out={is_zoom_out}
        size_icon={size_icon}
      />
    </div>
  )
}

export default VideoZoom
