import React from 'react';
import { common_types } from 'react-commons-ts';
//
import {
    handleChangeTimeType,
    handleChangeVolumeType,
    refBtnSettingType
} from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import VideoPause from '../../../video_components/pause/VideoPause';
import VideoTimeTotalTime from '../../../video_components/time_total_time/VideoTimeTotalTime';
import VideoTimeLine from '../../../video_components/time_line/_main/VideoTimeLine';
import VideoSettings from '../../../video_components/settings/_main/VideoSettings';
import VideoZoom from '../../../video_components/zoom/_main/VideoZoom';
import VideoSound from '../../../video_components/sound/_main/VideoSound';
//
import VideoPcUtilsStyles from './VideoPcUtils.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoPcUtilsStyles
    });
}

//
interface VideoPcUtilsProps {
    is_play: boolean;
    is_zoom_out: boolean;
    is_mute: boolean;
    volume: number;

    c_time: number;
    buffer_time: number;
    total_time: number;

    ref_btn_setting: refBtnSettingType;
    open_setting: boolean;
    size_icon?: string;

    ref_timeline_run?: common_types.UseRefType<boolean>;
    ref_sound_run?: common_types.UseRefType<boolean>;

    toggleOpenSetting: () => void;

    togglePlayPause: () => void;
    toggleZoom: () => void;
    toggleMute: () => void;
    handleChangeVolume: handleChangeVolumeType;

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;
}

//
function VideoPcUtils({
    is_play,
    is_zoom_out,
    is_mute,
    volume,

    c_time,
    buffer_time,
    total_time,

    ref_btn_setting,
    open_setting,
    size_icon,

    ref_timeline_run,
    ref_sound_run,

    toggleOpenSetting,

    togglePlayPause,
    toggleZoom,
    toggleMute,
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoPcUtilsProps) {
    //
    return (
        <div className={`${_getClassModuleCss('VideoPcUtils')}`}>
            <div className={_getClassModuleCss('VideoPcUtils_row')}>
                <div className={_getClassModuleCss('VideoPcUtils_part')}>
                    <VideoPause
                        is_play={is_play}
                        size_icon={size_icon}
                        // size_icon={'14px'}
                        // color={'var(--white)'}
                        togglePlayPause={togglePlayPause}
                    />
                </div>

                <div className={_getClassModuleCss('VideoPcUtils_part')}>
                    <VideoTimeTotalTime
                        c_time={c_time}
                        total_time={total_time}
                    />
                </div>

                <div className={_getClassModuleCss('VideoPcUtils_timeline')}>
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

                <div className={_getClassModuleCss('VideoPcUtils_part')}>
                    <VideoSettings
                        ref_btn_setting={ref_btn_setting}
                        open_setting={open_setting}
                        size_icon={size_icon}
                        toggleOpenSetting={toggleOpenSetting}
                    />
                </div>

                <div className={_getClassModuleCss('VideoPcUtils_part')}>
                    <VideoZoom
                        zoom_icon_name={'arrow'}
                        size_icon={size_icon}
                        is_zoom_out={is_zoom_out}
                        toggleZoom={toggleZoom}
                    />
                </div>

                <div className={_getClassModuleCss('VideoPcUtils_part')}>
                    <VideoSound
                        volume={volume}
                        is_mute={is_mute}
                        size_icon={size_icon}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        ref_is_run={ref_sound_run}
                        //
                        toggleMute={toggleMute}
                        handleChangeVolume={handleChangeVolume}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPcUtils;
