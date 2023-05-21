const endDateEl = "may 21, 2023 17:00:00";
document.getElementById("end-date").innerText=endDateEl;
const inputs = document.querySelectorAll("input");

function clock(){
    const end=new Date(endDateEl);
    const now=new Date();
    const diff=(end-now)/1000;
    
    if(diff<0)return;

    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
}
clock();

setInterval(()=>{
    clock()
},1000);


// Stopwatch js
window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var mins = 00;
    var hrs = 02;
    var OutputTens = document.getElementById("tens");
    var OutputSeconds = document.getElementById("second");
    var OutputMins = document.getElementById("min");
    var OutputHrs = document.getElementById("hr");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        mins = "00";
        hrs = "00";

        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
        OutputMins.innerHTML = mins;
        OutputHrs.innerHTML = hrs;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
        if(mins > 9){
            OutputMins.innerHTML = mins;
        }
        if(hrs > 9){
            OutputHrs.innerHTML = hrs;
        }

    }
}

