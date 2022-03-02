import * as React from 'react';
//
import {
    handleSettingDetailType,
    settingsPageType
} from '../../../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../../../utils/getClassModuleCss';
//
import VideoSetHomeItemLeft from '../_components/left/VideoSetHomeItemLeft';
import VideoSetHomeItemRight from '../_components/right/VideoSetHomeItemRight';
//
import VideoSetHomeItemMoreStyles from './VideoSetHomeItemMore.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSetHomeItemMoreStyles
    });
}

//
export interface VideoSetHomeItemMoreProps {
    icon_left: React.ReactNode;
    title_left: string;
    title_right: string;

    setting_name: settingsPageType;
    handleSettingDetail: handleSettingDetailType;
}

//
function VideoSetHomeItemMore({
    title_left,
    title_right,
    icon_left,

    setting_name,
    handleSettingDetail
}: VideoSetHomeItemMoreProps) {
    //
    function handleClick() {
        handleSettingDetail(setting_name);
    }

    //
    return (
        <div
            className={_getClassModuleCss('VideoSetHomeItemMore')}
            onClick={handleClick}
        >
            <VideoSetHomeItemLeft icon={icon_left} title={title_left} />

            <VideoSetHomeItemRight title={title_right} />
        </div>
    );
}

export default VideoSetHomeItemMore;
