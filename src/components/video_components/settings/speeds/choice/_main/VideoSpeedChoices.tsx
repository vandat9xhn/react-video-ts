import * as React from 'react';
//
import {
    handleChangeSpeedType,
    speedObjType
} from '../../../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../../../utils/getClassModuleCss';
//
import VideoSettingsHeadLayout from '../../../_components/head_layout/_main/VideoSettingsHeadLayout';
import VideoSpeedChoice from '../item/VideoSpeedChoice';
//
import VideoSpeedChoicesStyles from './VideoSpeedChoices.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSpeedChoicesStyles
    });
}

//
export interface VideoSpeedChoicesProps {
    custom_speed: number;
    has_custom_speed: boolean;
    chosen_custom_speed: boolean;
    speed: number;
    speed_arr: speedObjType[];

    handleBack: () => void;
    handleGotoCustom: () => void;
    chooseCustomSpeed: () => void;
    handleChangeSpeed: handleChangeSpeedType;
}

//
function VideoSpeedChoices({
    custom_speed,
    has_custom_speed,
    chosen_custom_speed,
    speed,
    speed_arr,

    handleBack,
    handleGotoCustom,
    chooseCustomSpeed,
    handleChangeSpeed
}: VideoSpeedChoicesProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSpeedChoices')}>
            <div className={_getClassModuleCss('VideoSpeedChoices_head')}>
                <VideoSettingsHeadLayout
                    title='Speed'
                    handleBack={handleBack}
                    right_elm={
                        <div
                            className={_getClassModuleCss(
                                'VideoSpeedChoices_head_right'
                            )}
                            onClick={handleGotoCustom}
                        >
                            Custom
                        </div>
                    }
                />
            </div>

            <div className={_getClassModuleCss('VideoSpeedChoices_list')}>
                {has_custom_speed && (
                    <VideoSpeedChoice
                        speed={custom_speed}
                        title={`Custom (${custom_speed
                            .toString()
                            .slice(0, 4)})`}
                        is_chosen={chosen_custom_speed}
                        handleChangeSpeed={chooseCustomSpeed}
                    />
                )}

                {speed_arr.map((item) => (
                    <VideoSpeedChoice
                        key={item.title}
                        speed={item.speed}
                        title={item.title}
                        is_chosen={!chosen_custom_speed && item.speed == speed}
                        handleChangeSpeed={handleChangeSpeed}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoSpeedChoices;
