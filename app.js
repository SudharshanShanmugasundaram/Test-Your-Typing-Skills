var startButton = document.getElementById("start");
var source = document.getElementById("source-content").textContent;
var stop = false;
var time1,time2,t3;
startButton.onclick = function () {

    if (stop == false) {
        document.getElementById("alert").style.display = "block";
        stop = true;
        var t1 = new Date();
        time1 = t1.getTime();
    }
    else if(stop == true){
        var t1 = new Date();
        time2=t1.getTime();
        t3 = time2 - time1;
        t3 = (125 * 60000) / t3;
        document.getElementById("result-content").append(t3 + " words per minute");
        stop = false; 
    }
}
