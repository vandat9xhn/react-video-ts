import { ReactElement } from "react";
// 
import { speedObjType } from "./useVideo";

// 
export interface VideoPropsType {
    video: string;
    track_arr?: React.ComponentProps<'track'>[];
    // view_count,
    total_view?: number;

    initial_is_play?: boolean;

    initial_zoom_lv?: number;
    max_zoom_lv?: number;
    use_fullscreen?: boolean;

    initial_volume?: number;
    initial_is_mute?: boolean;
    initial_c_time?: number;
    initial_total_time?: number;

    face_video_elm?: ReactElement;
    stop_when_over?: boolean;

    max_speed?: number;
    initial_speed_arr?: speedObjType[];

    beforeTogglePlay?: () => void;
    afterTogglePlay?: () => void;
    beforeChangeVolume?: () => void;
    afterChangeVolume?: () => void;
    beforeToggleMute?: () => void;
    afterToggleMute?: () => void;
    beforeChangeZoomLv?: () => void;
    afterChangeZoomLv?: () => void;
    beforeChangeTime?: () => void;
    afterChangeTime?: () => void;
}