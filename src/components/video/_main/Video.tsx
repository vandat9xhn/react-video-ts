import React from 'react';
//
import { VideoPropsType } from '../../../types/video';
//
import { IS_MOBILE } from '../../../const';
//
import VideoMb from '../video_mobile/_main/VideoMb';
import VideoPc from '../video_pc/_main/VideoPc';

//
interface VideoProps extends VideoPropsType {}

//
function Video(props: VideoProps) {
    //
    return IS_MOBILE ? <VideoMb {...props} /> : <VideoPc {...props} />;
}

export default Video;
