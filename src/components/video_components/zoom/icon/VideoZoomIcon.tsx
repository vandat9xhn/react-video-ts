import * as React from 'react'
//
import IconZoomArrow from '../../../../icons/zoom_arrow/IconZoomArrow'

//
interface VideoZoomIconProps {
  zoom_icon_name?: string
  is_zoom_out?: boolean
  size_icon?: string
}

//
function VideoZoomIcon({
  zoom_icon_name = 'arrow',
  is_zoom_out = false,
  size_icon
}: VideoZoomIconProps) {
  //
  if (zoom_icon_name == 'arrow') {
    return <IconZoomArrow zoom_out={!is_zoom_out} size_icon={size_icon} />
  }

  //
  return <div></div>
}

export default VideoZoomIcon
