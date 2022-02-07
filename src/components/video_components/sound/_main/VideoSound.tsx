import React, { ReactElement, useState } from 'react'
//
import { handleChangeVolumeType } from '../../../../types/useVideo'
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss'
//
import IconSound from '../../../../icons/sound/IconSound'
//
import OneSlider from '../../../one_slider/_main/OneSlider'
//
import stylesVideoSound from './VideoSound.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoSound
  })
}

const VideoSoundDefaultProps = {
  range: <div className={_getClassModuleCss('VideoSound_range')}></div>,
  active_range: (
    <div
      className={`${_getClassModuleCss(
        'VideoSound_range'
      )} ${_getClassModuleCss('VideoSound_range-active')}`}
    ></div>
  ),
  slider: <div className={_getClassModuleCss('VideoSound_slider')}></div>
}

//
interface VideoSoundProps {
  volume: number
  is_mute: boolean
  size_icon?: string

  range?: ReactElement
  active_range?: ReactElement
  slider?: ReactElement

  toggleMute: () => void
  handleChangeVolume: handleChangeVolumeType
}

//
function VideoSound({
  volume,
  is_mute,
  size_icon,

  range = VideoSoundDefaultProps.range,
  active_range = VideoSoundDefaultProps.active_range,
  slider = VideoSoundDefaultProps.slider,

  toggleMute,
  handleChangeVolume
}: VideoSoundProps) {
  //
  const [is_mouse_down, setIsMouseDown] = useState(false)

  // -----

  //
  function getRangeAngel() {
    return -90
  }

  //
  function afterMouseDown() {
    setIsMouseDown(true)
  }

  //
  function afterMouseUp() {
    setIsMouseDown(false)
  }

  //
  function onVolumeValueChange(new_volume = 0) {
    handleChangeVolume({ new_volume: new_volume / 100 })
  }

  //
  return (
    <div
      className={`${_getClassModuleCss('VideoSound')} ${
        is_mouse_down ? _getClassModuleCss('VideoSound-active') : ''
      }`}
    >
      <div
        className={_getClassModuleCss('VideoSound_icon')}
        onClick={toggleMute}
      >
        <IconSound
          is_mute={is_mute}
          is_too_low={volume <= 0.1}
          is_high={volume >= 0.6}
          //
          color='white'
          size_icon={size_icon}
        />
      </div>

      <div className={_getClassModuleCss('VideoSound_volume')}>
        <div className={_getClassModuleCss('VideoSound_volume_contain')}>
          <OneSlider
            range={range}
            active_range={active_range}
            slider={slider}
            value={is_mute ? 0 : volume * 100}
            //
            only_drag_slider={false}
            getRangeAngel={getRangeAngel}
            //
            handleChange={onVolumeValueChange}
            afterMouseDown={afterMouseDown}
            afterMouseUp={afterMouseUp}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoSound
