import * as React from 'react';
//
import { handleChangeSpeedType } from '../../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../../utils/getClassModuleCss';
//
import { OneSlider } from 'react-range-slider-ts';
//
import VideoSettingsHeadLayout from '../../_components/head_layout/_main/VideoSettingsHeadLayout';
//
import VideoSpeedsCustomStyles from './VideoSpeedsCustom.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSpeedsCustomStyles
    });
}

//
export interface VideoSpeedsCustomProps {
    custom_speed: number;
    chosen_custom_speed: boolean;
    speed: number;
    max_speed: number;

    handleChangeCustomSpeed: handleChangeSpeedType;
    afterEndCustomSpeed: () => void;
    handleBack: () => void;
}

//
function VideoSpeedsCustom({
    custom_speed,
    chosen_custom_speed,
    speed,
    max_speed,

    handleChangeCustomSpeed,
    afterEndCustomSpeed,
    handleBack
}: VideoSpeedsCustomProps) {
    //
    function handleChange(new_percent: number) {
        handleChangeCustomSpeed(
            (new_percent * (max_speed - 0.25)) / 100 + 0.25
        );
    }

    //
    function onBack() {
        afterEndCustomSpeed();
        handleBack();
    }

    //
    return (
        <div className={_getClassModuleCss('VideoSpeedsCustom')}>
            <div>
                <VideoSettingsHeadLayout title='Custom' handleBack={onBack} />
            </div>

            <div className={_getClassModuleCss('VideoSpeedsCustom_slider')}>
                <div
                    className={_getClassModuleCss(
                        'VideoSpeedsCustom_slider_contain'
                    )}
                >
                    <OneSlider
                        range={
                            <div
                                className={_getClassModuleCss(
                                    'VideoSpeedsCustom_slider_range'
                                )}
                            ></div>
                        }
                        slider={
                            <div
                                className={_getClassModuleCss(
                                    'VideoSpeedsCustom_slider_slider'
                                )}
                            ></div>
                        }
                        //
                        value={
                            ((custom_speed - 0.25) * 100) / (max_speed - 0.25)
                        }
                        handleChange={handleChange}
                    />
                </div>

                <div
                    className={_getClassModuleCss(
                        'VideoSpeedsCustom_slider_speed'
                    )}
                >
                    {Math.round(
                        (chosen_custom_speed ? speed : custom_speed) * 100
                    ) / 100}
                    x
                </div>
            </div>
        </div>
    );
}

export default VideoSpeedsCustom;
