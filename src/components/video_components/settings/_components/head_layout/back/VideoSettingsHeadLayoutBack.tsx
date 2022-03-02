import * as React from 'react';
//
import { getClassModuleCss } from '../../../../../../utils/getClassModuleCss';
//
import IconAngle from '../../../../../../icons/angle/IconAngle';
// 
import VideoSettingsHeadLayoutBackStyles from './VideoSettingsHeadLayoutBack.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSettingsHeadLayoutBackStyles
    });
}

//
export interface VideoSettingsHeadLayoutBackProps {
    title: string;
    handleBack: () => void;
}

//
function VideoSettingsHeadLayoutBack({
    title,
    handleBack
}: VideoSettingsHeadLayoutBackProps) {
    //
    return (
        <div
            className={_getClassModuleCss('VideoSettingsHeadLayoutBack')}
            onClick={handleBack}
        >
            <div
                className={_getClassModuleCss(
                    'VideoSettingsHeadLayoutBack_icon'
                )}
            >
                <IconAngle
                    svg_props={{ style: { transform: 'rotate(180deg)' } }}
                />
            </div>

            <div
                className={_getClassModuleCss(
                    'VideoSettingsHeadLayoutBack_title'
                )}
            >
                {title}
            </div>
        </div>
    );
}

export default VideoSettingsHeadLayoutBack;
