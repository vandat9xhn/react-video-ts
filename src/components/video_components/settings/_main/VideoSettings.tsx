import React from 'react';
//
import { refBtnSettingType } from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import IconSetting from '../../../../icons/setting/IconSetting';
//
import stylesVideoSettings from './VideoSettings.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: stylesVideoSettings
    });
}

//
interface VideoSettingsProps {
    ref_btn_setting: refBtnSettingType;
    open_setting: boolean;
    size_icon?: string;
    toggleOpenSetting: () => void;
}

//
function VideoSettings({
    ref_btn_setting,
    open_setting,
    size_icon,
    toggleOpenSetting
}: VideoSettingsProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSettings')}>
            <div
                ref={ref_btn_setting}
                className={`${_getClassModuleCss('VideoSettings_icon')}`}
                onClick={toggleOpenSetting}
            >
                <IconSetting
                    class_icon={`${_getClassModuleCss(
                        'VideoSettings_icon_svg'
                    )} ${
                        open_setting
                            ? _getClassModuleCss('VideoSettings_icon_svg-open')
                            : ''
                    }`}
                    stroke={'currentColor'}
                    size_icon={size_icon}
                />
            </div>
        </div>
    );
}

export default VideoSettings;
