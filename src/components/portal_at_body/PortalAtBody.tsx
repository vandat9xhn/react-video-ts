import * as React from 'react';
import ReactDOM from 'react-dom';

//
export interface PortalAtBodyProps {
    children: React.ReactNode | React.ReactElement;
}

//
function PortalAtBody({ children }: PortalAtBodyProps) {
    //
    return ReactDOM.createPortal(
        children,
        document.getElementsByTagName('body')[0]
    );
}

export default PortalAtBody;
