import { useEffect, useRef } from 'react';
import { useForceUpdate, useToggleDataset } from 'react-commons-ts';

//
type TypeHandleMouse = null | (() => void);

//
export function useHideCursorWhenFullscreen({
    fullscreen = false,
    use_fullscreen = false,
    time_to_hide = 1500
}) {
    //
    const ref_interval = useRef<null | NodeJS.Timeout>(null);
    const ref_c_time = useRef(0);
    const ref_mouse_down = useRef(false);

    const ref_handle_down = useRef<TypeHandleMouse>(null);
    const ref_handle_move = useRef<TypeHandleMouse>(null);
    const ref_handle_up = useRef<TypeHandleMouse>(null);

    const ref_is_hide_cursor = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    useToggleDataset({
        elm: document.getElementsByTagName('html')[0],
        attr_str: 'data-fullscreen-hide-cursor',
        is_remove: !ref_is_hide_cursor.current
    });

    //
    useEffect(() => {
        if (use_fullscreen) {
            if (fullscreen) {
                addMouseEvent();
            } else {
                removeMouseEvent();
            }
        }
    }, [use_fullscreen && fullscreen]);

    // ----

    //
    function addMouseEvent() {
        ref_handle_down.current = ref_handle_down.current || handleMouseDown;
        ref_handle_move.current = ref_handle_move.current || handleMouseMove;
        ref_handle_up.current = ref_handle_up.current || handleMouseUp;

        window.addEventListener('mousedown', ref_handle_down.current);
        window.addEventListener('mousemove', ref_handle_move.current);
        window.addEventListener('mouseup', ref_handle_up.current);

        startCountUp();
    }

    //
    function removeMouseEvent() {
        ref_handle_down.current &&
            window.removeEventListener('mousedown', ref_handle_down.current);
        ref_handle_move.current &&
            window.removeEventListener('mousemove', ref_handle_move.current);
        ref_handle_up.current &&
            window.removeEventListener('mouseup', ref_handle_up.current);

        ref_handle_down.current = null;
        ref_handle_move.current = null;
        ref_handle_up.current = null;

        if (ref_interval.current) {
            clearInterval(ref_interval.current);
            ref_interval.current = null;
        }
    }

    // ------

    //
    function startCountUp() {
        if (ref_interval.current) {
            return;
        }

        ref_interval.current = setInterval(() => {
            ref_c_time.current += 100;

            if (ref_c_time.current == time_to_hide) {
                ref_interval.current && clearInterval(ref_interval.current);

                ref_interval.current = null;
                ref_is_hide_cursor.current = true;
                ref_c_time.current = 0;

                forceUpdate();
            }
        }, 100);
    }

    //
    function handleMouseMove() {
        if (ref_mouse_down.current) {
            return;
        }

        ref_c_time.current = 0;

        if (ref_is_hide_cursor.current) {
            ref_is_hide_cursor.current = false;
            forceUpdate();
        } else {
            startCountUp();
        }
    }

    //
    function handleMouseDown() {
        ref_mouse_down.current = true;
        ref_c_time.current = 0;
        ref_interval.current && clearInterval(ref_interval.current);
        ref_interval.current = null;

        if (ref_is_hide_cursor.current) {
            ref_is_hide_cursor.current = false;
            forceUpdate();
        }
    }

    //
    function handleMouseUp() {
        ref_mouse_down.current = false;
        startCountUp();
    }

    // ----

    return {
        ref_is_hide_cursor
    };
}
