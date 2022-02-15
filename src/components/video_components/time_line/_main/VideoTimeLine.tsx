import React, { ReactElement } from 'react';
//
import { handleChangeTimeType } from '../../../../types/useVideo';
//
import { getClassModuleCss } from '../../../../utils/getClassModuleCss';
//
import MyOneSlider from '../../../one_slider/MyOneSlider';
// 
import stylesVideoTimeLine from './VideoTimeLine.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: stylesVideoTimeLine
    });
}

//
const VideoTimeLineDefaultProps = {
    range: (
        <div className={_getClassModuleCss('VideoTimeLine_range')}>
            <div
                className={_getClassModuleCss('VideoTimeLine_range_contain')}
            ></div>
        </div>
    ),
    active_range: (
        <div
            className={`${_getClassModuleCss(
                'VideoTimeLine_range'
            )} ${_getClassModuleCss('VideoTimeLine_range-active')}`}
        >
            <div
                className={`${_getClassModuleCss(
                    'VideoTimeLine_range_contain'
                )} ${_getClassModuleCss('VideoTimeLine_range_contain-active')}`}
            ></div>
        </div>
    ),
    slider: <div className={_getClassModuleCss('VideoTimeLine_slider')}></div>
};

//
interface VideoTimeLineProps {
    c_time: number;
    total_time: number;
    buffer_time: number;

    range?: ReactElement;
    active_range?: ReactElement;
    slider?: ReactElement;

    handleChangeTime: handleChangeTimeType;
    handleStartMoveTime: () => void;
    handleEndMoveTime: () => void;
}

//
function VideoTimeLine({
    c_time,
    total_time,
    buffer_time,

    range = VideoTimeLineDefaultProps.range,
    active_range = VideoTimeLineDefaultProps.active_range,
    slider = VideoTimeLineDefaultProps.slider,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime
}: VideoTimeLineProps) {
    //
    function onChangeTime(time_percent = 0) {
        handleChangeTime({
            new_c_time: (total_time * time_percent) / 100
        });
    }

    //
    return (
        <div className={_getClassModuleCss('VideoTimeLine')}>
            <MyOneSlider
                range={
                    <React.Fragment>
                        {range}
                        <div
                            className={_getClassModuleCss(
                                'VideoTimeLine_buffer'
                            )}
                            style={{ width: `${buffer_time}%` }}
                        >
                            <div
                                className={_getClassModuleCss(
                                    'VideoTimeLine_buffer_contain'
                                )}
                            ></div>
                        </div>
                    </React.Fragment>
                }
                active_range={active_range}
                slider={slider}
                value={c_time}
                only_drag_slider={false}
                //
                handleChange={onChangeTime}
                afterMouseDown={handleStartMoveTime}
                afterMouseUp={handleEndMoveTime}
            />
        </div>
    );
}

export default VideoTimeLine;
