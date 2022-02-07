//
const time_200 = new Date('2000/01/01').getTime();

//
function roundNum(num = 0) {
    return Math.round(num);
}

//
function getNumberBy2Digit(num = 0) {
    const _num = roundNum(num);

    if (_num <= 9) {
        return `0${_num}`;
    }

    return _num;
}

//
export function getVideoTimeFromSeconds({ second = 0 }) {
    // second
    if (second < 60) {
        return `0:${getNumberBy2Digit(second)}`;
    }

    // minute 60 * 60
    if (second < 3600) {
        const minute = Math.floor(second / 60);
        const rest_second = second - minute * 60;

        return `${minute}:${getNumberBy2Digit(rest_second)}`;
    }

    // hours 24 * 60 * 60
    if (second < 86400) {
        const hour = Math.floor(second / 86400);
        const minute = Math.floor((second - 86400) / 60);
        const rest_second = second - minute * 60;

        return `${hour}:${getNumberBy2Digit(minute)}:${getNumberBy2Digit(
            rest_second
        )}`;
    }

    const day = Math.floor(second / (24 * 60 * 60));
    const rest_second = second - day * 24 * 60 * 60;
    const time_str = new Date(time_200 + rest_second * 1000)
        .toTimeString()
        .slice(0, 8);

    return `${day}:${time_str}`;
}
