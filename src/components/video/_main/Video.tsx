import React, { ReactElement, useRef } from 'react';
//
import { useVideoUtils } from '../../../hooks/useVideoUtils';
import { INITIAL_SPEED_ARR } from '../../../initial/speed_arr';
import { speedObjType } from '../../../types/useVideo';
//
import VideoElm from '../elm/VideoElm';

//
const MAX_SPEED = 2;

//
interface VideoProps {
    video: string;
    track_arr?: React.ComponentProps<'track'>[];
    // view_count,
    total_view?: number;

    initial_is_play?: boolean;

    initial_zoom_lv?: number;
    max_zoom_lv?: number;
    use_fullscreen?: boolean;

    initial_volume?: number;
    initial_is_mute?: boolean;
    initial_c_time?: number;
    initial_total_time?: number;

    face_video_elm?: ReactElement;
    stop_when_over?: boolean;

    max_speed?: number;
    initial_speed_arr?: speedObjType[];

    beforeTogglePlay?: () => void;
    afterTogglePlay?: () => void;
    beforeChangeVolume?: () => void;
    afterChangeVolume?: () => void;
    beforeToggleMute?: () => void;
    afterToggleMute?: () => void;
    beforeChangeZoomLv?: () => void;
    afterChangeZoomLv?: () => void;
    beforeChangeTime?: () => void;
    afterChangeTime?: () => void;
}

//
function Video({
    video,
    track_arr,
    // view_count,
    total_view,

    initial_is_play,

    initial_zoom_lv,
    max_zoom_lv = 0,
    use_fullscreen = false,

    initial_volume,
    initial_is_mute,
    initial_c_time,
    initial_total_time,

    face_video_elm,
    stop_when_over = true,

    max_speed = MAX_SPEED,
    initial_speed_arr = INITIAL_SPEED_ARR(),

    beforeTogglePlay,
    afterTogglePlay,
    beforeChangeVolume,
    afterChangeVolume,
    beforeToggleMute,
    afterToggleMute,
    beforeChangeZoomLv,
    afterChangeZoomLv,
    beforeChangeTime,
    afterChangeTime
}: VideoProps) {
    //
    const ref_main_video = useRef<HTMLDivElement>(null);
    const ref_video_elm = useRef<HTMLVideoElement>(null);

    //
    const {
        ref_is_play,
        ref_zoom_lv,

        ref_volume,
        ref_is_mute,

        ref_c_time,
        ref_total_time,
        ref_buffer_time,
        ref_holding_slider,

        ref_is_hide_cursor,

        // settings
        ref_setting_name,
        ref_speed,
        ref_custom_speed,
        ref_has_custom_speed,
        ref_chosen_custom_speed,

        ref_open_setting,
        toggleOpenSetting,
        handleSettingDetail,
        
        chooseCustomSpeed,
        handleChangeSpeed,
        afterEndCustomSpeed,
        handleChangeCustomSpeed,

        //
        togglePlay,
        changeVolume,
        toggleMute,
        changeZoomLv,

        changeTime,
        startMoveTime,
        endMoveTime,
        getTotalTime,
        changeTotalTime,

        // live
        gotoLiveView
    } = useVideoUtils({
        ref_main_video: ref_main_video,
        ref_video_elm: ref_video_elm,

        is_live: false,
        stop_when_over: stop_when_over,
        use_fullscreen: use_fullscreen,

        initial_is_play: initial_is_play,
        initial_zoom_lv: initial_zoom_lv,
        max_zoom_lv: max_zoom_lv,
        initial_volume: initial_volume,
        initial_is_mute: initial_is_mute,
        initial_c_time: initial_c_time,
        initial_total_time: initial_total_time,

        beforeTogglePlay: beforeTogglePlay,
        afterTogglePlay: afterTogglePlay,
        beforeChangeVolume: beforeChangeVolume,
        afterChangeVolume: afterChangeVolume,
        beforeToggleMute: beforeToggleMute,
        afterToggleMute: afterToggleMute,
        beforeChangeZoomLv: beforeChangeZoomLv,
        afterChangeZoomLv: afterChangeZoomLv,
        beforeChangeTime: beforeChangeTime,
        afterChangeTime: afterChangeTime
    });

    // ------

    // console.log(ref_video_elm.current);

    //
    return (
        <VideoElm
            ref_main_video={ref_main_video}
            ref_video_elm={ref_video_elm}
            video={video}
            track_arr={track_arr}
            total_view={total_view}
            //
            is_play={ref_is_play.current}
            is_mute={ref_is_mute.current}
            volume={ref_volume.current}
            //
            is_zoom_out={ref_zoom_lv.current == max_zoom_lv && max_zoom_lv > 0}
            is_hide_cursor={ref_is_hide_cursor.current}
            //
            c_time={ref_c_time.current}
            buffer_time={ref_buffer_time.current}
            total_time={ref_total_time.current}
            //
            face_video_elm={face_video_elm}
            //
            open_setting={ref_open_setting.current}
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
            handleSettingDetail={handleSettingDetail}
            chooseCustomSpeed={chooseCustomSpeed}
            handleChangeSpeed={handleChangeSpeed}
            afterEndCustomSpeed={afterEndCustomSpeed}
            handleChangeCustomSpeed={handleChangeCustomSpeed}
            //
            togglePlayPause={togglePlay}
            toggleZoom={changeZoomLv}
            toggleMute={toggleMute}
            handleChangeVolume={changeVolume}
            //
            handleChangeTime={changeTime}
            handleStartMoveTime={startMoveTime}
            handleEndMoveTime={endMoveTime}
        />
    );
}

export default Video;
