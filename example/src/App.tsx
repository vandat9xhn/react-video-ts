import React, { useState } from 'react';
//
import { Video, VideoLive, VideoMb } from 'react-video-ts';
import 'react-video-ts/dist/index.css';
//
import subtitle from './subtitle.vtt';

//
const App = () => {
    //
    const [is_close, setIsClose] = useState(false);

    // -----

    //
    function toggleClose() {
        setIsClose((is_close) => !is_close);
    }

    //
    return (
        <div>
            <div onClick={toggleClose}>Close</div>

            {is_close ? null : (
                <div
                    style={{
                        margin: 'auto',
                        width: '700px',
                        maxWidth: '100%',
                        height: '400px',
                        backgroundColor: 'black'
                    }}
                >
                    <Video
                        video='http://media.w3.org/2010/05/bunny/movie.ogv'
                        total_view={20}
                        track_arr={[
                            {
                                label: 'English',
                                kind: 'subtitles',
                                srcLang: 'en',
                                src: subtitle,
                                default: true
                            }
                        ]}
                        use_fullscreen={true}
                        max_zoom_lv={1}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
