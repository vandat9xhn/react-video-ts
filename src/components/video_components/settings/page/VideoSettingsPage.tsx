import * as React from 'react';
//
import {
    handleChangeSpeedType,
    handleSettingDetailType,
    settingsPageType,
    speedObjType
} from '../../../../types/useVideo';
//
import VideoSetHome from '../home/_main/VideoSetHome';
import VideoSpeeds from '../speeds/_main/VideoSpeeds';

//
export interface VideoSettingsPageProps {
    setting_name: settingsPageType;
    custom_speed: number;
    has_custom_speed: boolean;
    chosen_custom_speed: boolean;
    speed: number;
    max_speed: number;
    speed_arr: speedObjType[];

    handleSettingDetail: handleSettingDetailType;
    chooseCustomSpeed: () => void;
    handleChangeSpeed: handleChangeSpeedType;
    afterEndCustomSpeed: () => void;
    handleChangeCustomSpeed: handleChangeSpeedType;
}

//
function VideoSettingsPage({
    setting_name,
    custom_speed,
    has_custom_speed,
    chosen_custom_speed,
    speed,
    max_speed,
    speed_arr,

    handleSettingDetail,
    chooseCustomSpeed,
    handleChangeSpeed,
    afterEndCustomSpeed,
    handleChangeCustomSpeed
}: VideoSettingsPageProps) {
    //
    function handleBackToHome() {
        handleSettingDetail('home');
    }

    // -----

    //
    if (setting_name == 'home') {
        return (
            <VideoSetHome
                speed={speed}
                handleSettingDetail={handleSettingDetail}
            />
        );
    }

    //
    if (setting_name == 'speed') {
        return (
            <VideoSpeeds
                custom_speed={custom_speed}
                has_custom_speed={has_custom_speed}
                chosen_custom_speed={chosen_custom_speed}
                speed={speed}
                max_speed={max_speed}
                speed_arr={speed_arr}
                //
                handleBack={handleBackToHome}
                chooseCustomSpeed={chooseCustomSpeed}
                handleChangeSpeed={handleChangeSpeed}
                afterEndCustomSpeed={afterEndCustomSpeed}
                handleChangeCustomSpeed={handleChangeCustomSpeed}
            />
        );
    }

    //
    return <div></div>;
}

export default VideoSettingsPage;
