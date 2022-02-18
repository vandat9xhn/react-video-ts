import React, { ReactElement, useEffect } from 'react';
import { useBool, useHold } from 'react-commons-ts';
//
import { RefElmType } from '../../../types/_common';
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss';
//
import stylesVideoUtilsLayout from './VideoUtilsLayout.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: stylesVideoUtilsLayout
    });
}

//
interface VideoUtilsLayoutProps {
    ref_main_video: RefElmType<HTMLDivElement>;
    use_hide_utils?: boolean;
    is_hide_cursor: boolean;
    stop_hide_utils?: boolean;
    children: ReactElement;
}

//
function VideoUtilsLayout({
    ref_main_video,
    use_hide_utils = true,
    is_hide_cursor,
    stop_hide_utils = false,
    children
}: VideoUtilsLayoutProps) {
    //
    const { StartHold, StopHold } = useHold({ time: 1500 });
    const { is_true, setIsTrue } = useBool();

    //
    useEffect(() => {
        if (use_hide_utils && ref_main_video.current) {
            ref_main_video.current.addEventListener(
                'mouseleave',
                handleMouseLeave
            );
            ref_main_video.current.addEventListener(
                'mouseenter',
                handleMouseEnter
            );

            return () => {
                if (ref_main_video.current) {
                    ref_main_video.current.removeEventListener(
                        'mouseleave',
                        handleMouseLeave
                    );
                    ref_main_video.current.removeEventListener(
                        'mouseenter',
                        handleMouseEnter
                    );
                }
            };
        }
    }, []);

    // ----

    //
    function handleMouseLeave() {
        StartHold(() => {
            setIsTrue(true);
        });
    }

    //
    function handleMouseEnter() {
        StopHold();
        setIsTrue(false);
    }

    //
    return (
        <div
            className={`${_getClassModuleCss('VideoUtilsLayout')} ${
                (is_true || is_hide_cursor) && !stop_hide_utils
                    ? _getClassModuleCss('VideoUtilsLayout-out')
                    : ''
            }`}
        >
            <div className={_getClassModuleCss('VideoUtilsLayout_contain')}>
                {children}
            </div>
        </div>
    );
}

export default VideoUtilsLayout;
