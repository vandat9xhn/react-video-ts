import * as React from 'react';
//
import { handleSettingDetailType } from '../../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../../utils/getClassModuleCss';
//
import IconCheck from '../../../../../icons/check/IconCheck';
//
import VideoSetHomeItemMore from '../item/item_more/VideoSetHomeItemMore';
//
import VideoSetHomeStyles from './VideoSetHome.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSetHomeStyles
    });
}

//
export interface VideoSetHomeProps {
    speed: number;
    handleSettingDetail: handleSettingDetailType;
}

//
function VideoSetHome({ speed, handleSettingDetail }: VideoSetHomeProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSetHome')}>
            <VideoSetHomeItemMore
                icon_left={<IconCheck />}
                title_left='Speed'
                title_right={`${speed}`.slice(0, 4)}
                //
                setting_name='speed'
                handleSettingDetail={handleSettingDetail}
            />
        </div>
    );
}

export default VideoSetHome;
