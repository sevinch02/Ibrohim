const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');

let seconds = 20;

const examDate = new Date('6 November 2021');


function countDown() {
    const currentDate = new Date();
    const diffInSeconds = (examDate - currentDate) / 1000;

    dayEl.innerText = Math.floor(diffInSeconds / 3600 / 24);
    hourEl.innerText = Math.floor(diffInSeconds / 3600) % 24;
    minuteEl.innerText = Math.floor(diffInSeconds / 60) % 60;
    secondEl.innerText = Math.floor(diffInSeconds % 60);
}

setInterval( countDown, 1000);

// getElementById - elementlarni id si bo'yicha tanlab olish
// setInterval funksiyasi
// countdown misolida Date ma'lumot turi bilan ishlash