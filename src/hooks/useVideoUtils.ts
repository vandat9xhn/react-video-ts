import { useEffect, useRef } from 'react'
import { useForceUpdate } from 'react-commons-ts'
// 
import { RefMainVideoType, RefVideoType } from '../types/useVideo'
//
import { exitFullscreen, requestFullscreen } from '../utils/handelFullScreen'
import { observerDisplay } from '../utils/observerDisplay'
//
import { useHideCursorWhenFullscreen } from './useHideCursorWhenFullscreen'

//
const ref_main_video_default: RefMainVideoType = {
  current: document.getElementsByTagName('div')[0]
}

const ref_video_elm_default: RefVideoType = {
  current: document.getElementsByTagName('video')[0]
}

//
export function useVideoUtils({
  ref_main_video = ref_main_video_default,
  ref_video_elm = ref_video_elm_default,

  is_live = false,
  stop_when_over = true,
  use_fullscreen = false,

  initial_is_play = false,
  initial_zoom_lv = 0,
  max_zoom_lv = 0,

  initial_volume = 0.5,
  initial_is_mute = true,

  initial_c_time = 0,
  initial_total_time = 0,

  beforeTogglePlay = () => {},
  afterTogglePlay = () => {},

  beforeChangeVolume = () => {},
  afterChangeVolume = () => {},
  beforeToggleMute = () => {},
  afterToggleMute = () => {},

  beforeChangeZoomLv = () => {},
  afterChangeZoomLv = () => {},

  beforeChangeTime = () => {},
  afterChangeTime = () => {},

  beforeGotoLiveView = () => {},
  afterGotoLiveView = () => {}
}) {
  //
  const ref_is_play = useRef(initial_is_play)
  const ref_zoom_lv = useRef(initial_zoom_lv)

  const ref_volume = useRef(initial_volume)
  const ref_is_mute = useRef(initial_is_mute)

  const ref_c_time = useRef(initial_c_time)
  const ref_total_time = useRef(initial_total_time)
  const ref_buffer_time = useRef(0)

  const ref_holding_slider = useRef(false)
  const ref_is_over = useRef(false)

  //
  const is_zoom_max = ref_zoom_lv.current == max_zoom_lv

  //
  const forceUpdate = useForceUpdate()

  const { ref_is_hide_cursor } = useHideCursorWhenFullscreen({
    use_fullscreen: use_fullscreen,
    fullscreen: is_zoom_max,
  })

  //
  useEffect(() => {
    if (!ref_video_elm.current) {
      return
    }

    ref_video_elm.current.addEventListener('loadedmetadata', handleLoadMetadata)
    ref_video_elm.current.addEventListener('timeupdate', handleTimeUpDate)
    ref_video_elm.current.addEventListener('progress', handleProgress)
    ref_video_elm.current.addEventListener('ended', handleEnded)

    ref_video_elm.current.addEventListener(
      'durationchange',
      handleChangeDuration
    )
    ref_video_elm.current.addEventListener('pause', handleWhenPause)

    return () => {
      if (ref_video_elm.current) {
        ref_video_elm.current.removeEventListener(
          'loadedmetadata',
          handleLoadMetadata
        )
        ref_video_elm.current.removeEventListener(
          'timeupdate',
          handleTimeUpDate
        )
        ref_video_elm.current.removeEventListener('progress', handleProgress)
        ref_video_elm.current.removeEventListener('ended', handleEnded)

        ref_video_elm.current.removeEventListener(
          'durationchange',
          handleChangeDuration
        )
        ref_video_elm.current.removeEventListener('pause', handleWhenPause)
      }
    }
  }, [])

  //
  useEffect(() => {
    stop_when_over &&
      ref_video_elm.current &&
      observerDisplay({
        elm: ref_video_elm.current,
        callbackDisplay: () => {
          ref_is_over.current = false
        },
        callbackNoDisplay: () => {
          ref_is_over.current = true
          if (ref_is_play.current) {
            togglePlay()
          }
        }
      })
  }, [])

  //
  useEffect(() => {
    if (!use_fullscreen) {
      return
    }

    if (is_zoom_max && ref_main_video.current) {
      requestFullscreen({ elm: ref_main_video.current })
    } else {
      exitFullscreen()
    }

    document.addEventListener('fullscreenchange', handleScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleScreenChange)
    }
  }, [is_zoom_max])

  // ---- EVENTS

  //
  function handleLoadMetadata() {
    //
    if (!ref_video_elm.current) {
      return
    }

    if (is_live) {
      ref_c_time.current = ref_total_time.current
    }

    ref_video_elm.current.currentTime = ref_c_time.current

    ref_total_time.current = ref_video_elm.current.duration
    ref_is_mute.current && (ref_video_elm.current.muted = true)
    ref_is_play.current && ref_video_elm.current.play()

    forceUpdate()
  }

  //
  function handleTimeUpDate() {
    if (!ref_video_elm.current) {
      return
    }

    ref_c_time.current = ref_video_elm.current.currentTime
    forceUpdate()
  }

  //
  function handleProgress() {
    if (!ref_video_elm.current) {
      return
    }

    let range = 0
    const bf = ref_video_elm.current.buffered
    const c_time = ref_video_elm.current.currentTime

    if (bf.length == 0) {
      return
    }

    while (!(bf.start(range) <= c_time || bf.end(range) >= c_time)) {
      range += 1
    }

    ref_buffer_time.current = bf.end(range)
  }

  //
  function handleEnded() {
    ref_is_play.current = false
    forceUpdate()
  }

  //
  function handleChangeDuration() {
    if (!ref_video_elm.current) {
      return
    }

    ref_total_time.current = ref_video_elm.current.duration
    forceUpdate()
  }

  //
  function handleWhenPause() {
    if (!ref_video_elm.current) {
      return
    }

    if (ref_holding_slider.current) {
      return
    }

    ref_is_play.current = false
    forceUpdate()
  }

  // ----

  //
  function handleScreenChange() {
    if (document.fullscreenElement || ref_zoom_lv.current == 0) {
      return
    }

    ref_zoom_lv.current = 0
    forceUpdate()
  }

  // ---- NORMAL

  //
  function togglePlay() {
    if (!ref_video_elm.current) {
      return
    }

    beforeTogglePlay()

    const new_is_play = !ref_is_play.current
    ref_is_play.current = new_is_play
    if (new_is_play) {
      ref_video_elm.current.play()
    } else {
      ref_video_elm.current.pause()
    }

    forceUpdate()
    afterTogglePlay()
  }

  //
  function changeZoomLv() {
    if (!ref_video_elm.current) {
      return
    }

    let new_zoom_lv = ref_zoom_lv.current + 1
    if (new_zoom_lv > max_zoom_lv) {
      new_zoom_lv = 0
    }

    // console.log(new_zoom_lv);

    beforeChangeZoomLv()
    ref_zoom_lv.current = new_zoom_lv
    forceUpdate()
    afterChangeZoomLv()
  }

  // ---

  //
  function changeVolume({ new_volume = 0 }) {
    if (!ref_video_elm.current) {
      return
    }

    beforeChangeVolume()
    ref_volume.current = new_volume
    ref_is_mute.current = false
    ref_video_elm.current.volume = new_volume
    ref_video_elm.current.muted && (ref_video_elm.current.muted = false)
    forceUpdate()
    afterChangeVolume()
  }

  //
  function toggleMute() {
    if (!ref_video_elm.current) {
      return
    }

    beforeToggleMute()
    const new_is_mute = !ref_is_mute.current
    ref_is_mute.current = new_is_mute
    ref_video_elm.current.muted = new_is_mute
    forceUpdate()
    afterToggleMute()
  }

  // ----

  //
  function changeTime({ new_c_time = 0 }) {
    if (!ref_video_elm.current) {
      return
    }

    beforeChangeTime()
    ref_c_time.current = new_c_time
    ref_video_elm.current.currentTime = new_c_time
    forceUpdate()
    afterChangeTime()
  }

  //
  function changeTotalTime(new_total_time = 0) {
    if (!ref_video_elm.current) {
      return
    }

    ref_total_time.current = new_total_time
    forceUpdate()
  }

  //
  function startMoveTime() {
    if (!ref_video_elm.current) {
      return
    }

    ref_holding_slider.current = true
    if (ref_is_play.current) {
      ref_video_elm.current.pause()
    }
  }

  //
  function endMoveTime() {
    if (!ref_video_elm.current) {
      return
    }

    ref_holding_slider.current = false
    if (ref_is_play.current) {
      ref_video_elm.current.play()
    }
  }

  // ---- NORMAL

  function getTotalTime() {
    if (!ref_video_elm.current) {
      return
    }

    return ref_video_elm.current.duration
  }

  // ---- LIVE

  //
  function gotoLiveView() {
    if (!ref_video_elm.current) {
      return
    }

    if (ref_c_time.current == ref_total_time.current) {
      return
    }

    beforeGotoLiveView()
    // ref_is_play.current = true;
    // ref_video_elm.current.play();
    ref_c_time.current = ref_total_time.current
    ref_video_elm.current.currentTime = ref_total_time.current
    forceUpdate()
    afterGotoLiveView()
  }

  // ----

  return {
    ref_is_play,
    ref_zoom_lv,

    ref_volume,
    ref_is_mute,

    ref_c_time,
    ref_total_time,
    ref_buffer_time,
    ref_holding_slider,

    ref_is_hide_cursor,

    togglePlay,
    changeVolume,
    toggleMute,
    changeZoomLv,

    changeTime,
    startMoveTime,
    endMoveTime,
    getTotalTime,
    changeTotalTime,

    // live
    gotoLiveView
  }
}
