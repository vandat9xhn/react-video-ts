import React from 'react';
//
import { IS_MOBILE } from '../../../../const';
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
import VideoTimeLine from '../../../video_components/time_line/_main/VideoTimeLine';
import VideoSettings from '../../../video_components/settings/_main/VideoSettings';
import VideoZoom from '../../../video_components/zoom/_main/VideoZoom';
import VideoSound from '../../../video_components/sound/_main/VideoSound';
//
import VideoLiveTimeDelay from '../time_delay/VideoLiveTimeDelay';
//
import VideoLiveUtilsStyles from './VideoLiveUtils.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoLiveUtilsStyles
    });
}

//
interface VideoLiveUtilsProps {
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

    toggleOpenSetting: () => void;

    togglePlayPause: () => void;
    toggleZoom: () => void;
    toggleMute: () => void;
    handleChangeVolume: handleChangeVolumeType;

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;

    gotoLiveView: () => void;
}

//
function VideoLiveUtils({
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

    toggleOpenSetting,

    togglePlayPause,
    gotoLiveView,
    toggleZoom,
    toggleMute,
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoLiveUtilsProps) {
    //
    return (
        <div
            className={`${_getClassModuleCss('VideoLiveUtils')} ${
                c_time == total_time
                    ? _getClassModuleCss('VideoLiveUtils-live')
                    : ''
            }`}
        >
            <div className={_getClassModuleCss('VideoLiveUtils_row')}>
                <div className={_getClassModuleCss('VideoLiveUtils_part')}>
                    <VideoPause
                        is_play={is_play}
                        size_icon={size_icon}
                        // size_icon={'14px'}
                        // color={'var(--white)'}
                        togglePlayPause={togglePlayPause}
                    />
                </div>

                {c_time == total_time && IS_MOBILE ? null : (
                    <div
                        className={_getClassModuleCss(
                            'VideoLiveUtils_live_now'
                        )}
                        onClick={gotoLiveView}
                    >
                        Live
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className={_getClassModuleCss('VideoLiveUtils_part')}>
                        <VideoLiveTimeDelay
                            c_time={c_time}
                            total_time={total_time}
                        />
                    </div>
                )}

                <div className={_getClassModuleCss('VideoLiveUtils_timeline')}>
                    <VideoTimeLine
                        c_time={(c_time * 100) / total_time}
                        total_time={total_time}
                        buffer_time={(buffer_time * 100) / total_time}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        handleChangeTime={handleChangeTime}
                        handleStartMoveTime={handleStartMoveTime}
                        handleEndMoveTime={handleEndMoveTime}
                    />
                </div>

                {IS_MOBILE ? null : (
                    <div className={_getClassModuleCss('VideoLiveUtils_part')}>
                        <VideoSettings
                            ref_btn_setting={ref_btn_setting}
                            open_setting={open_setting}
                            size_icon={size_icon}
                            toggleOpenSetting={toggleOpenSetting}
                        />
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className={_getClassModuleCss('VideoLiveUtils_part')}>
                        <VideoZoom
                            zoom_icon_name={'arrow'}
                            size_icon={size_icon}
                            is_zoom_out={is_zoom_out}
                            toggleZoom={toggleZoom}
                        />
                    </div>
                )}

                <div className={_getClassModuleCss('VideoLiveUtils_part')}>
                    <VideoSound
                        volume={volume}
                        is_mute={is_mute}
                        size_icon={size_icon}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        toggleMute={toggleMute}
                        handleChangeVolume={handleChangeVolume}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoLiveUtils;
