import React, { ReactElement, useRef } from 'react';
import { ClickingOutSideFull } from 'react-click-outside-ts';
//
import {
    handleChangeSpeedType,
    handleChangeTimeType,
    handleChangeVolumeType,
    handleSettingDetailType,
    RefMainVideoType,
    RefVideoType,
    settingsPageType,
    speedObjType
} from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import VideoUtils from '../utils/VideoPcUtils';
import VideoItem from '../../../video_components/video/VideoItem';
import VideoUtilsLayout from '../../../video_components/utils_layout/VideoUtilsLayout';
//
import VideoPcElmStyles from './VideoPcElm.scss';
import VideoSettingsPage from '../../../video_components/settings/page/VideoSettingsPage';
import CircleLoading from '../../../circle_loading/CircleLoading';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoPcElmStyles
    });
}

//
interface VideoPcElmProps {
    ref_main_video: RefMainVideoType;
    ref_video_elm: RefVideoType;
    face_video_elm?: ReactElement;

    video: string;
    track_arr?: React.ComponentProps<'track'>[];
    size_icon_utils?: string;
    total_view?: number;

    //
    is_play: boolean;
    is_waiting: boolean;
    is_mute: boolean;
    volume: number;
    is_zoom_out: boolean;
    is_hide_cursor: boolean;

    c_time: number;
    buffer_time: number;
    total_time: number;

    // settings
    setting_name: settingsPageType;
    custom_speed: number;
    has_custom_speed: boolean;
    chosen_custom_speed: boolean;
    speed: number;
    max_speed: number;
    speed_arr: speedObjType[];

    open_setting: boolean;
    toggleOpenSetting: () => void;
    handleCloseSettings: () => void;
    handleSettingDetail: handleSettingDetailType;
    chooseCustomSpeed: () => void;
    handleChangeSpeed: handleChangeSpeedType;
    afterEndCustomSpeed: () => void;
    handleChangeCustomSpeed: handleChangeSpeedType;

    //
    togglePlayPause: () => void;
    toggleZoom: () => void;
    toggleMute: () => void;
    handleChangeVolume: handleChangeVolumeType;

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;
}

//
function VideoPcElm({
    ref_main_video,
    ref_video_elm,
    face_video_elm,

    video,
    track_arr,
    size_icon_utils = '20px',
    total_view,

    is_play,
    is_waiting,
    is_mute,
    volume,
    is_zoom_out,
    is_hide_cursor,

    c_time,
    buffer_time,
    total_time,

    setting_name,
    custom_speed,
    has_custom_speed,
    chosen_custom_speed,
    speed,
    max_speed,
    speed_arr,

    open_setting,
    toggleOpenSetting,
    handleCloseSettings,
    
    handleSettingDetail,
    chooseCustomSpeed,
    handleChangeSpeed,
    afterEndCustomSpeed,
    handleChangeCustomSpeed,

    togglePlayPause,
    toggleZoom,
    toggleMute,
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoPcElmProps) {
    //
    const ref_timeline_run = useRef(false);
    const ref_sound_run = useRef(false);

    const ref_settings = useRef<HTMLDivElement>(null);
    const ref_btn_setting = useRef<HTMLDivElement>(null);

    // ------

    //
    function handleClickOutSide() {
        handleCloseSettings();
    }

    //
    return (
        <div
            ref={ref_main_video}
            className={`${_getClassModuleCss('VideoPcElm')}`}
        >
            <VideoItem
                ref_video_elm={ref_video_elm}
                video={video}
                track_arr={track_arr}
            />

            <div className={`${_getClassModuleCss('VideoPcElm_face')}`}>
                {face_video_elm}
            </div>

            {is_waiting && (
                <div className={`${_getClassModuleCss('VideoPcElm_waiting')}`}>
                    <CircleLoading is_fetching={is_waiting} />
                </div>
            )}

            {open_setting && (
                <ClickingOutSideFull
                    ref_child={ref_settings}
                    refs_target={[ref_btn_setting]}
                    is_show={open_setting}
                    handleClickOutSide={handleClickOutSide}
                >
                    <div
                        ref={ref_settings}
                        className={`${_getClassModuleCss(
                            'VideoPcElm_settings'
                        )}`}
                    >
                        <VideoSettingsPage
                            setting_name={setting_name}
                            custom_speed={custom_speed}
                            has_custom_speed={has_custom_speed}
                            chosen_custom_speed={chosen_custom_speed}
                            speed={speed}
                            max_speed={max_speed}
                            speed_arr={speed_arr}
                            //
                            handleSettingDetail={handleSettingDetail}
                            chooseCustomSpeed={chooseCustomSpeed}
                            handleChangeSpeed={handleChangeSpeed}
                            afterEndCustomSpeed={afterEndCustomSpeed}
                            handleChangeCustomSpeed={handleChangeCustomSpeed}
                        />
                    </div>
                </ClickingOutSideFull>
            )}

            <VideoUtilsLayout
                ref_main_video={ref_main_video}
                is_hide_cursor={is_hide_cursor}
                stop_hide_utils={
                    ref_sound_run.current || ref_timeline_run.current
                }
                //
                open_setting={open_setting}
            >
                <VideoUtils
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
                    size_icon={size_icon_utils}
                    //
                    ref_sound_run={ref_sound_run}
                    ref_timeline_run={ref_timeline_run}
                    //
                    toggleOpenSetting={toggleOpenSetting}
                    //
                    togglePlayPause={togglePlayPause}
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

export default VideoPcElm;
