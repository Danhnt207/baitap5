const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.round(Math.ceil((ms1 -ms2))/ (24*60*60*1000));
};
let christmas_day = new Date('2023-02-09');
// console.log(christmas_day.toUTCString());

let today = new Date();
// console.log(today.toUTCString());
let time = get_day_of_time(christmas_day, today);
// console.log(time + ' days');
document.getElementById("result").innerHTML = time;
