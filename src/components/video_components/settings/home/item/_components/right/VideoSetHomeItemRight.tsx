import * as React from 'react';
import IconAngle from '../../../../../../../icons/angle/IconAngle';
//
import { getClassModuleCss } from '../../../../../../../utils/getClassModuleCss';
//
import VideoSetHomeItemRightStyles from './VideoSetHomeItemRight.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSetHomeItemRightStyles
    });
}

//
export interface VideoSetHomeItemRightProps {
    title: string;
}

//
function VideoSetHomeItemRight({ title }: VideoSetHomeItemRightProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSetHomeItemRight')}>
            <div className={_getClassModuleCss('VideoSetHomeItemRight_title')}>
                {title}
            </div>

            <IconAngle />
        </div>
    );
}

export default VideoSetHomeItemRight;
