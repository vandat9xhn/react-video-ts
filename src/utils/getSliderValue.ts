//
function getTruePercent(new_percent: number) {
  return new_percent >= 1 ? 1 : new_percent <= 0 ? 0 : new_percent
}

//
function getSliderPercentX({
  x_range_start = 0,
  x_range_end = 0,
  clientX = 0
}) {
  const new_percent = (clientX - x_range_start) / (x_range_end - x_range_start)
  return getTruePercent(new_percent)
}

//
function getSliderPercentY({
  y_range_start = 0,
  y_range_end = 0,
  clientY = 0
}) {
  const new_percent = (clientY - y_range_start) / (y_range_end - y_range_start)
  return getTruePercent(new_percent)
}

//
export function getSliderPercent({
  range_angel = 0,

  x_range_start = 0,
  y_range_start = 0,
  x_range_end = 0,
  y_range_end = 0,

  clientX = 0,
  clientY = 0
}) {
  if (range_angel == 0) {
    return getSliderPercentX({
      x_range_start: x_range_start,
      x_range_end: x_range_end,
      clientX: clientX
    })
  }

  if (range_angel == 90) {
    return getSliderPercentY({
      y_range_start: y_range_start,
      y_range_end: y_range_end,
      clientY: clientY
    })
  }

  return 0
}
