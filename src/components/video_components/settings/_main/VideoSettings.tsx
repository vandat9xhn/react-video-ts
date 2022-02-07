import React from 'react'
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss'
//
import IconSetting from '../../../../icons/setting/IconSetting'
//
import stylesVideoSettings from './VideoSettings.scss'

//
function _getClassModuleCss(className = '') {
  return getClassModuleCss({
    className: className,
    styles: stylesVideoSettings
  })
}

//
interface VideoSettingsProps {
  size_icon?: string
}

//
function VideoSettings({ size_icon }: VideoSettingsProps) {
  //
  return (
    <div className={_getClassModuleCss('VideoSettings')}>
      <div className={_getClassModuleCss('VideoSettings_icon')}>
        <IconSetting stroke={'currentColor'} size_icon={size_icon} />
      </div>
    </div>
  )
}

export default VideoSettings
