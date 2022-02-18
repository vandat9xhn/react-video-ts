import React, { useState } from 'react';

import { Video } from 'react-video-ts';
import 'react-video-ts/dist/index.css';

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
                        height: '450px',
                        backgroundColor: 'black'
                    }}
                >
                    <Video
                        video='https://media.w3.org/2010/05/sintel/trailer.mp4'
                        use_fullscreen={true}
                        max_zoom_lv={1}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
