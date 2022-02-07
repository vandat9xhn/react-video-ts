import { useState } from 'react';

//
export const useBool = (initial_bool = false) => {
    const [is_true, setIsTrue] = useState(initial_bool);

    //
    function toggleBool() {
        setIsTrue((is_true) => !is_true);
    }

    // 
    return {
        is_true,
        setIsTrue,
        
        toggleBool,
    };
};
