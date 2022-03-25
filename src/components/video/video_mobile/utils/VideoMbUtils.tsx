import React from 'react';
import { common_types } from 'react-commons-ts';
//
import {
    handleChangeTimeType,
    refBtnSettingType
} from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import VideoTimeTotalTime from '../../../video_components/time_total_time/VideoTimeTotalTime';
import VideoTimeLine from '../../../video_components/time_line/_main/VideoTimeLine';
import VideoSettings from '../../../video_components/settings/_main/VideoSettings';
import VideoZoom from '../../../video_components/zoom/_main/VideoZoom';
//
import VideoMbUtilsStyles from './VideoMbUtils.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoMbUtilsStyles
    });
}

//
interface VideoMbUtilsProps {
    is_zoom_out: boolean;
    c_time: number;
    buffer_time: number;
    total_time: number;

    ref_btn_setting: refBtnSettingType;
    ref_timeline_run?: common_types.UseRefType<boolean>;
    open_setting: boolean;
    size_icon?: string;

    toggleOpenSetting: () => void;
    toggleZoom: () => void;

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;
}

//
function VideoMbUtils({
    is_zoom_out,
    c_time,
    buffer_time,
    total_time,

    ref_btn_setting,
    ref_timeline_run,
    open_setting,
    size_icon,

    toggleOpenSetting,
    toggleZoom,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoMbUtilsProps) {
    //
    return (
        <div className={`${_getClassModuleCss('VideoMbUtils')}`}>
            <div className={_getClassModuleCss('VideoMbUtils_row')}>
                <div className={_getClassModuleCss('VideoMbUtils_timeline')}>
                    <VideoTimeLine
                        c_time={(c_time * 100) / total_time}
                        buffer_time={(buffer_time * 100) / total_time}
                        total_time={total_time}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        ref_is_run={ref_timeline_run}
                        //
                        handleChangeTime={handleChangeTime}
                        handleStartMoveTime={handleStartMoveTime}
                        handleEndMoveTime={handleEndMoveTime}
                    />
                </div>

                <div className={_getClassModuleCss('VideoMbUtils_part')}>
                    <VideoTimeTotalTime
                        c_time={c_time}
                        total_time={total_time}
                    />
                </div>

                <div className={_getClassModuleCss('VideoMbUtils_part')}>
                    <VideoSettings
                        ref_btn_setting={ref_btn_setting}
                        open_setting={open_setting}
                        size_icon={size_icon}
                        toggleOpenSetting={toggleOpenSetting}
                    />
                </div>

                <div className={_getClassModuleCss('VideoMbUtils_part')}>
                    <VideoZoom
                        zoom_icon_name={'arrow'}
                        size_icon={size_icon}
                        is_zoom_out={is_zoom_out}
                        toggleZoom={toggleZoom}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoMbUtils;
