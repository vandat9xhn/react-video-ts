import React from 'react';

interface IconAngleProps {
    class_icon?: string;
    size_icon?: string;
    x?: number;
    y?: number;
    svg_props?: React.ComponentProps<'svg'>;
}

//
function IconAngle({
    class_icon = '',
    size_icon = '1rem',
    x = 0,
    y = 0,
    svg_props = {}
}: IconAngleProps) {
    //
    return (
        <svg
            className={`IconAngle ${class_icon}`}
            viewBox={`${x} ${y} 200 200`}
            width={size_icon}
            height={size_icon}
            //
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={25}
            {...svg_props}
        >
            <path d='M75,20 125,100 75,180' className='IconAngle_next' />
        </svg>
    );
}

export default IconAngle;
