import React, { useRef } from 'react';
//
import { VideoPropsType } from '../../../../types/video';
// 
import { INITIAL_SPEED_ARR } from '../../../../initial/speed_arr';
// 
import { useVideoUtils } from '../../../../hooks/useVideoUtils';
//
import VideoMbElm from '../elm/VideoMbElm';

//
const MAX_SPEED = 2;

//
interface VideoMbProps
    extends Omit<
        VideoPropsType,
        | 'initial_volume'
        | 'initial_is_mute'
        | 'beforeChangeVolume'
        | 'afterChangeVolume'
        | 'beforeToggleMute'
        | 'afterToggleMute'
    > {}

//
function VideoMb({
    video,
    track_arr,
    // view_count,
    total_view,

    initial_is_play,
    initial_c_time,
    initial_total_time,

    initial_zoom_lv,
    max_zoom_lv = 0,
    use_fullscreen = false,

    face_video_elm,
    stop_when_over = true,

    max_speed = MAX_SPEED,
    initial_speed_arr = INITIAL_SPEED_ARR(),

    beforeTogglePlay,
    afterTogglePlay,
    beforeChangeZoomLv,
    afterChangeZoomLv,
    beforeChangeTime,
    afterChangeTime
}: VideoMbProps) {
    //
    const ref_main_video = useRef<HTMLDivElement>(null);
    const ref_video_elm = useRef<HTMLVideoElement>(null);

    //
    const {
        ref_is_play,
        ref_is_waiting,
        ref_zoom_lv,

        ref_c_time,
        ref_total_time,
        ref_buffer_time,

        // settings
        ref_setting_name,
        ref_speed,
        ref_custom_speed,
        ref_has_custom_speed,
        ref_chosen_custom_speed,

        ref_open_setting,
        ref_open_utils,
        toggleOpenSetting,
        handleCloseSettings,
        handleSettingDetail,

        chooseCustomSpeed,
        handleChangeSpeed,
        afterEndCustomSpeed,
        handleChangeCustomSpeed,

        //
        togglePlay,
        changeZoomLv,
        toggleOpenUtils,

        changeTime,
        startMoveTime,
        endMoveTime
        // getTotalTime,
        // changeTotalTime,

        // live
        // gotoLiveView
    } = useVideoUtils({
        ref_main_video: ref_main_video,
        ref_video_elm: ref_video_elm,

        is_live: false,
        stop_when_over: stop_when_over,
        use_fullscreen: use_fullscreen,

        initial_is_play: initial_is_play,
        initial_zoom_lv: initial_zoom_lv,
        max_zoom_lv: max_zoom_lv,
        initial_volume: 1,
        initial_is_mute: false,
        initial_c_time: initial_c_time,
        initial_total_time: initial_total_time,

        beforeTogglePlay: beforeTogglePlay,
        afterTogglePlay: afterTogglePlay,
        beforeChangeZoomLv: beforeChangeZoomLv,
        afterChangeZoomLv: afterChangeZoomLv,
        beforeChangeTime: beforeChangeTime,
        afterChangeTime: afterChangeTime
    });

    // ------

    // console.log(ref_video_elm.current);

    //
    return (
        <VideoMbElm
            ref_main_video={ref_main_video}
            ref_video_elm={ref_video_elm}
            video={video}
            track_arr={track_arr}
            total_view={total_view}
            //
            is_play={ref_is_play.current}
            is_waiting={ref_is_waiting.current}
            is_zoom_out={ref_zoom_lv.current == max_zoom_lv && max_zoom_lv > 0}
            //
            c_time={ref_c_time.current}
            buffer_time={ref_buffer_time.current}
            total_time={ref_total_time.current}
            //
            face_video_elm={face_video_elm}
            //
            open_setting={ref_open_setting.current}
            open_utils={ref_open_utils.current}
            setting_name={ref_setting_name.current}
            //
            custom_speed={ref_custom_speed.current}
            has_custom_speed={ref_has_custom_speed.current}
            chosen_custom_speed={ref_chosen_custom_speed.current}
            speed={ref_speed.current}
            max_speed={max_speed}
            speed_arr={initial_speed_arr}
            //
            toggleOpenSetting={toggleOpenSetting}
            handleCloseSettings={handleCloseSettings}
            handleSettingDetail={handleSettingDetail}
            chooseCustomSpeed={chooseCustomSpeed}
            handleChangeSpeed={handleChangeSpeed}
            afterEndCustomSpeed={afterEndCustomSpeed}
            handleChangeCustomSpeed={handleChangeCustomSpeed}
            //
            togglePlayPause={togglePlay}
            toggleZoom={changeZoomLv}
            toggleOpenUtils={toggleOpenUtils}
            //
            handleChangeTime={changeTime}
            handleStartMoveTime={startMoveTime}
            handleEndMoveTime={endMoveTime}
        />
    );
}

export default VideoMb;
