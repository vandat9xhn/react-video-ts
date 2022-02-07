//
export function requestFullscreen({ elm }: { elm: HTMLElement }) {
  if (elm.requestFullscreen) {
    elm.requestFullscreen()
  }

  // if (elm.webkitRequestFullscreen) {
  //    elm.webkitRequestFullscreen()
  // }

  // if (elm.msRequestFullscreen) {
  //    elm.msRequestFullscreen()
  // }
}

//
export function exitFullscreen() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    // else if (document.webkitExitFullscreen) {
    //   document.webkitExitFullscreen()
    // } else if (document.msExitFullscreen) {
    //   document.msExitFullscreen()
    // }
  }
}
