import React, { ReactElement, useRef } from 'react';
//
import {
    handleChangeSpeedType,
    handleChangeTimeType,
    handleSettingDetailType,
    RefMainVideoType,
    RefVideoType,
    settingsPageType,
    speedObjType
} from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import VideoMbUtils from '../utils/VideoMbUtils';
import VideoItem from '../../../video_components/video/VideoItem';
//
import VideoSettingsPage from '../../../video_components/settings/page/VideoSettingsPage';
import CircleLoading from '../../../circle_loading/CircleLoading';
import PortalAtBody from '../../../portal_at_body/PortalAtBody';
import VideoPause from '../../../video_components/pause/VideoPause';
//
import VideoMbElmStyles from './VideoMbElm.scss';
import Styles from '../../../../styles.module.css';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoMbElmStyles
    });
}

//
interface VideoMbElmProps {
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
    is_zoom_out: boolean;

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

    open_utils: boolean;
    toggleOpenUtils: () => void;

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

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;
}

//
function VideoMbElm({
    ref_main_video,
    ref_video_elm,
    face_video_elm,

    video,
    track_arr,
    size_icon_utils = '16px',
    total_view,

    is_play,
    is_waiting,
    is_zoom_out,

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

    open_utils,
    toggleOpenUtils,

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

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoMbElmProps) {
    //
    const ref_timeline_run = useRef(false);

    const ref_btn_setting = useRef<HTMLDivElement>(null);

    // ------

    //
    function NotTogglePlayPause() {}

    //
    return (
        <div
            ref={ref_main_video}
            className={`${_getClassModuleCss('VideoMbElm')}`}
        >
            <VideoItem
                ref_video_elm={ref_video_elm}
                video={video}
                track_arr={track_arr}
            />

            <div
                className={`${_getClassModuleCss('VideoMbElm_bg_shadow')} ${
                    open_utils ? '' : Styles['display-none']
                }`}
            ></div>

            <div
                className={`${_getClassModuleCss('VideoMbElm_face')}`}
                onClick={toggleOpenUtils}
            >
                {face_video_elm}
            </div>

            {is_waiting && is_play && (
                <div className={`${_getClassModuleCss('VideoMbElm_waiting')}`}>
                    <CircleLoading is_fetching={is_waiting} />
                </div>
            )}

            <div
                className={`${_getClassModuleCss('VideoMbElm_pause')} ${
                    is_play ? '' : _getClassModuleCss('VideoMbElm_pause-play')
                } ${open_utils ? '' : Styles['display-none']}`}
                onClick={togglePlayPause}
            >
                <div
                    className={`${_getClassModuleCss(
                        'VideoMbElm_pause_contain'
                    )}`}
                >
                    <VideoPause
                        is_play={is_play}
                        size_icon={'30px'}
                        // color={'var(--white)'}
                        togglePlayPause={NotTogglePlayPause}
                    />
                </div>
            </div>

            {open_setting && (
                <PortalAtBody>
                    <div
                        className={`${_getClassModuleCss(
                            'VideoMbElm_settings'
                        )}`}
                    >
                        <div
                            className={`${_getClassModuleCss(
                                'VideoMbElm_settings_bg'
                            )}`}
                            onClick={handleCloseSettings}
                        ></div>

                        <div
                            className={`${_getClassModuleCss(
                                'VideoMbElm_settings_page'
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
                                handleChangeCustomSpeed={
                                    handleChangeCustomSpeed
                                }
                            />
                        </div>
                    </div>
                </PortalAtBody>
            )}

            <div
                className={`${_getClassModuleCss('VideoMbElm_utils')} ${
                    open_utils ? '' : Styles['display-none']
                }`}
            >
                <VideoMbUtils
                    is_zoom_out={is_zoom_out}
                    c_time={c_time}
                    buffer_time={buffer_time}
                    total_time={total_time}
                    //
                    ref_btn_setting={ref_btn_setting}
                    ref_timeline_run={ref_timeline_run}
                    open_setting={open_setting}
                    size_icon={size_icon_utils}
                    //
                    toggleOpenSetting={toggleOpenSetting}
                    toggleZoom={toggleZoom}
                    //
                    handleChangeTime={handleChangeTime}
                    handleStartMoveTime={handleStartMoveTime}
                    handleEndMoveTime={handleEndMoveTime}
                />
            </div>
        </div>
    );
}

export default VideoMbElm;
