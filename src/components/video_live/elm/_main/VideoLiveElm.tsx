import React, { ReactElement, useRef } from 'react';
//
import { IS_MOBILE } from '../../../../const';
//
import {
    handleChangeTimeType,
    handleChangeVolumeType,
  
    RefMainVideoType,
    RefVideoType
} from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import VideoItem from '../../../video_components/video/VideoItem';
import VideoLiveUtils from '../../utils/_main/VideoLiveUtils';
import VideoLiveView from '../../view/VideoLiveView';
import VideoUtilsLayout from '../../../video_components/utils_layout/VideoUtilsLayout';
//
import VideoLiveElmStyles from './VideoLiveElm.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoLiveElmStyles
    });
}

//
interface VideoLiveElmProps {
    ref_main_video: RefMainVideoType;
    ref_video_elm: RefVideoType;
    face_video_elm?: ReactElement;

    video: string;
    track_arr?: React.ComponentProps<'track'>[];
    size_icon?: string;
    total_view: number;

    is_play: boolean;
    is_mute: boolean;
    volume: number;
    is_zoom_out: boolean;
    is_hide_cursor: boolean;

    c_time: number;
    buffer_time: number;
    total_time: number;

    open_setting: boolean;
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
function VideoLiveElm({
    ref_main_video,
    ref_video_elm,
    video,
    track_arr,
    total_view,

    is_play,
    is_mute,
    volume,
    is_zoom_out,
    is_hide_cursor,

    c_time,
    buffer_time,
    total_time,

    size_icon = IS_MOBILE ? '16px' : '20px',
    face_video_elm,

    open_setting,
    toggleOpenSetting,

    togglePlayPause,
    gotoLiveView,
    toggleZoom,
    toggleMute,
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoLiveElmProps) {
    // 
    const ref_btn_setting = useRef<HTMLDivElement>(null);

    //
    return (
        <div
            ref={ref_main_video}
            className={`${_getClassModuleCss('VideoLiveElm')} ${
                IS_MOBILE ? _getClassModuleCss('VideoLiveElm-mobile') : ''
            } ${is_play ? _getClassModuleCss('VideoLiveElm-play') : ''}`}
        >
            <VideoItem
                ref_video_elm={ref_video_elm}
                video={video}
                track_arr={track_arr}
            />

            <div className={_getClassModuleCss('VideoLiveElm_face')}>
                {face_video_elm}
            </div>

            <div className={_getClassModuleCss('VideoLiveElm_view')}>
                <VideoLiveView
                    is_live_view={c_time == total_time}
                    total_view={total_view}
                />
            </div>

            <VideoUtilsLayout
                ref_main_video={ref_main_video}
                is_hide_cursor={is_hide_cursor}
                open_setting={open_setting}
            >
                <VideoLiveUtils
                    is_play={is_play}
                    is_zoom_out={is_zoom_out}
                    is_mute={is_mute}
                    volume={volume}
                    //
                    c_time={c_time}
                    buffer_time={buffer_time}
                    total_time={total_time}
                    //
                    ref_btn_setting={ref_btn_setting}
                    open_setting={open_setting}
                    toggleOpenSetting={toggleOpenSetting}
                    size_icon={size_icon}
                    //
                    togglePlayPause={togglePlayPause}
                    gotoLiveView={gotoLiveView}
                    toggleZoom={toggleZoom}
                    toggleMute={toggleMute}
                    handleChangeVolume={handleChangeVolume}
                    //
                    handleChangeTime={handleChangeTime}
                    handleStartMoveTime={handleStartMoveTime}
                    handleEndMoveTime={handleEndMoveTime}
                />
            </VideoUtilsLayout>
        </div>
    );
}

export default VideoLiveElm;
