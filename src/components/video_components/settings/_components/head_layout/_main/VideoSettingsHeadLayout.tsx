import * as React from 'react';
//
import { getClassModuleCss } from '../../../../../../utils/getClassModuleCss';
//
import VideoSettingsHeadLayoutBack, {
    VideoSettingsHeadLayoutBackProps
} from '../back/VideoSettingsHeadLayoutBack';
//
import VideoSettingsHeadLayoutStyles from './VideoSettingsHeadLayout.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: VideoSettingsHeadLayoutStyles
    });
}

//
export interface VideoSettingsHeadLayoutProps {
    right_elm?: React.ReactNode;
}

//
function VideoSettingsHeadLayout({
    title,
    right_elm,
    handleBack
}: VideoSettingsHeadLayoutProps & VideoSettingsHeadLayoutBackProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoSettingsHeadLayout')}>
            <VideoSettingsHeadLayoutBack
                title={title}
                handleBack={handleBack}
            />

            {right_elm}
        </div>
    );
}

export default VideoSettingsHeadLayout;
