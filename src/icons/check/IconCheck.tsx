import React from 'react';

//
function IconCheck({
    size_icon = '1rem',
    x = 0,
    y = 0,
    stroke = 'currentColor'
}) {
    //
    return (
        <svg
            className='IconCheck'
            width={size_icon}
            height={size_icon}
            viewBox={`${x} ${y} 200 200`}
            strokeLinecap='round'
        >
            <path
                d='M50,125 80,150 150,50'
                strokeWidth='20'
                stroke={stroke}
                fill='none'
            />
        </svg>
    );
}

export default IconCheck;
