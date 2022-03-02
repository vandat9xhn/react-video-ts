import * as React from 'react';
//
import { getClassModuleCss } from '../../../../../../../utils/getClassModuleCss';
//
import VideoSetHomeItemLeftStyles from './VideoSetHomeItemLeft.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSetHomeItemLeftStyles
    });
}

//
export interface VideoSetHomeItemLeftProps {
    icon: React.ReactNode;
    title: string;
}

//
function VideoSetHomeItemLeft({ icon, title }: VideoSetHomeItemLeftProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSetHomeItemLeft')}>
            {icon}

            <div className={_getClassModuleCss('VideoSetHomeItemLeft_title')}>
                {title}
            </div>
        </div>
    );
}

export default VideoSetHomeItemLeft;
