import React from 'react';

//
interface IconSettingProps {
    class_icon?: string;
    fill?: string;
    size_icon?: string;
    stroke?: string;
    stroke_width?: number;
}

//
function IconSetting({
    class_icon = '',
    fill = 'none',
    size_icon = '1rem',
    stroke = '',
    stroke_width = 10
}: IconSettingProps) {
    //
    return (
        <svg
            className={`IconSetting ${class_icon}`}
            width={size_icon}
            height={size_icon}
            viewBox='0 0 200 200'
            fill={fill}
            strokeWidth={stroke_width}
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z' />

            <circle
                className='IconSetting_circle'
                cx='100'
                cy='100'
                r='30'
                fill='none'
            />
        </svg>
    );
}

export default IconSetting;
