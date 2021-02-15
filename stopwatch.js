window.onload = function () {

    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    // var buttonDown = document.getElementById("button-countdown");
    var StartInterval;
    // var CountDownInterval; 

    // clearinterval() function clears the interval which has been set by setInterval() function before that
    // setInterval() takes two parameters. First a function to be executed and second after how much time in ms. 
    // setInternal() executes the passed function for the given time interval. The number id value returned by setInterval() function is stored in a variable and it's passed itto the clearInterval() function 
    buttonStart.onclick = function () {
        clearInterval(StartInterval);
        // clearInterval(CountDownInterval); 
        StartInterval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(StartInterval);
        // clearInterval(CountDownInterval); 
    }

    buttonReset.onclick = function () {
        clearInterval(StartInterval);
        // clearInterval(CountDownInterval); 
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if (tens < 10) {
            appendTens.innerHTML = '0' + tens;
        }

        if (tens > 10) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds")
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    } 
}