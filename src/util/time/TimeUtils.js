
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





export function GMTToStr2(GTMTime) {

    function p(s){
        return s < 10 ? '0' + s : s
    };

    const d = new Date(GTMTime);
    const resDate = d.getFullYear() + '-' + p((d.getMonth() + 1)) + '-' + p(d.getDate());
    const resTime = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());

    return resDate + " " + resTime;

};
