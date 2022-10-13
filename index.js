// delaring variables to manipulate the elements
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// Funtion to manipulate the time display
function updateClock() {
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    // Logic to change AM to PM and vice versa
    if (hrs > 12)  {
        hrs = hrs-12;
        ampm = "PM";
    }
// logic to display 0 when time is single digit
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

hourEl.innerText = hrs;
minutesEl.innerText = mins;
secondsEl.innerText = sec;
ampmEl,(innerText = ampm);

setTimeout(()  => {
    updateClock();
}, 1000)

}

updateClock();