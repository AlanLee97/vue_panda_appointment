
export function GMTToStr(time) {
    let date = new Date(time);
    let str = date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();
    return str;
};

export function strToGMT(time) {
    let GMT = new Date(time);
    return GMT;
}
