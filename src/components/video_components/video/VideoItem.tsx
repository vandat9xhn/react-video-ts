import React from 'react';
//
import { RefElmType } from '../../../types/_common';
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss';
//
import stylesVideoItem from './VideoItem.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: stylesVideoItem
    });
}

//
interface VideoItemProps {
    ref_video_elm: RefElmType<HTMLVideoElement>;
    video: string;
    track_arr?: React.ComponentProps<'track'>[];
}

//
function VideoItem({ ref_video_elm, video, track_arr = [] }: VideoItemProps) {
    //
    return (
        <div className={_getClassModuleCss('VideoItem')}>
            <video
                ref={ref_video_elm}
                className={_getClassModuleCss('VideoItem_video')}
                // src={video}
                controls={false}
                preload='metadata'
            >
                <source src={video} />

                {track_arr.map((item, ix) => (
                    <track
                        key={ix}
                        label={item.label}
                        kind={item.kind}
                        srcLang={item.srcLang}
                        src={item.src}
                        default={item.default}
                    />
                ))}
            </video>
        </div>
    );
}

export default VideoItem;
