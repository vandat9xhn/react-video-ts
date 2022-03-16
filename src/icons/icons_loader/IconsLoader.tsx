import React from 'react';
//
import { getClassModuleCss } from '../../utils/getClassModuleCss';
//
import IconsLoaderStyles from './IconsLoader.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss({
        className: className,
        styles: IconsLoaderStyles
    });
}

//
function IconsLoader({
    size_icon = '4rem',
    x = 0,
    y = 0,
    is_fetching = false
}) {
    //
    return (
        <svg
            className={`${_getClassModuleCss('IconsLoader')} ${
                is_fetching ? _getClassModuleCss('IconsLoader-active') : ''
            }`}
            viewBox={`${x} ${y} 200 200`}
            fill='none'
            width={size_icon}
            height={size_icon}
        >
            {/* spinner x=0 y=0 */}

            <circle
                className={_getClassModuleCss('IconsLoader_spinner')}
                strokeWidth={25}
                cx='100'
                cy='100'
                r='85'
                stroke='#ccc'
            />
        </svg>
    );
}

export default IconsLoader;
