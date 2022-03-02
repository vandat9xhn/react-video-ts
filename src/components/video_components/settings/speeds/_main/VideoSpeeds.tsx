import * as React from 'react';
//
import {
    handleChangeSpeedType,
    speedObjType,
    speedPageType
} from '../../../../../types/useVideo';
//
import VideoSpeedChoices from '../choice/_main/VideoSpeedChoices';
import VideoSpeedsCustom from '../custom/VideoSpeedsCustom';

//
export interface VideoSpeedsProps {
    custom_speed: number;
    has_custom_speed: boolean;
    chosen_custom_speed: boolean;
    speed: number;
    max_speed: number;
    speed_arr: speedObjType[];

    handleBack: () => void;
    chooseCustomSpeed: () => void;
    handleChangeSpeed: handleChangeSpeedType;
    afterEndCustomSpeed: () => void;
    handleChangeCustomSpeed: handleChangeSpeedType;
}

//
function VideoSpeeds({
    custom_speed,
    has_custom_speed,
    chosen_custom_speed,
    speed,
    max_speed,
    speed_arr,

    handleBack,
    chooseCustomSpeed,
    handleChangeSpeed,
    afterEndCustomSpeed,
    handleChangeCustomSpeed
}: VideoSpeedsProps) {
    //
    const [speed_page, setSpeedPage] = React.useState<speedPageType>('choice');

    // ----

    //
    function handleGotoCustom() {
        setSpeedPage('custom');
    }

    //
    function handleBackToChoice() {
        setSpeedPage('choice');
    }

    // -----

    //
    if (speed_page == 'choice') {
        return (
            <VideoSpeedChoices
                custom_speed={custom_speed}
                has_custom_speed={has_custom_speed}
                chosen_custom_speed={chosen_custom_speed}
                speed={speed}
                speed_arr={speed_arr}
                //
                handleBack={handleBack}
                handleGotoCustom={handleGotoCustom}
                chooseCustomSpeed={chooseCustomSpeed}
                handleChangeSpeed={handleChangeSpeed}
            />
        );
    }

    //
    return (
        <VideoSpeedsCustom
            custom_speed={custom_speed}
            chosen_custom_speed={chosen_custom_speed}
            speed={speed}
            max_speed={max_speed}
            //
            handleChangeCustomSpeed={handleChangeCustomSpeed}
            afterEndCustomSpeed={afterEndCustomSpeed}
            handleBack={handleBackToChoice}
        />
    );
}

export default VideoSpeeds;
