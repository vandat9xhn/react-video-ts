import * as React from 'react';
//
import { handleChangeSpeedType } from '../../../../../../types/useVideo';
// 
import { getClassModuleCss } from '../../../../../../utils/getClassModuleCss';
//
import IconCheck from '../../../../../../icons/check/IconCheck';
//
import VideoSpeedChoiceStyles from './VideoSpeedChoice.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSpeedChoiceStyles
    });
}

//
export interface VideoSpeedChoiceProps {
    speed: number;
    title: string;
    is_chosen: boolean;
    handleChangeSpeed: handleChangeSpeedType
}

//
function VideoSpeedChoice({
    speed,
    title,
    is_chosen,
    handleChangeSpeed
}: VideoSpeedChoiceProps) {
    //
    function handleClick() {
        handleChangeSpeed(speed);
    }

    //
    return (
        <div className={_getClassModuleCss('VideoSpeedChoice')} onClick={handleClick}>
            <div
                className={`${_getClassModuleCss('VideoSpeedChoice_check')} ${
                    is_chosen ? '' : _getClassModuleCss('VideoSpeedChoice_check-not')
                }`}
            >
                <IconCheck />
            </div>

            <div className={_getClassModuleCss('VideoSpeedChoice_title')}>
                {title}
            </div>
        </div>
    );
}

export default VideoSpeedChoice;
