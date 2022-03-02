//
export function changeVideoSubtitle(
    video_elm: HTMLVideoElement,
    track_ix: number = -1
) {
    for (let i = 0; i < video_elm.textTracks.length; i++) {
        video_elm.textTracks[i].mode = 'hidden';
    }

    if (track_ix >= 0) {
        video_elm.textTracks[track_ix].mode = 'showing';
    }
}
