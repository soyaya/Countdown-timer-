const dayse = document.getElementById("days");
const hourse = document.getElementById("hours");
const minse = document.getElementById("mins");
const secse = document.getElementById("seconds");

const newYears = "1 JAN 2022";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const distance = newYearsDate-currentDate

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayse.innerHTML = days;
    hourse.innerHTML = hours;
    minse.innerHTML = minutes;
    secse.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);
