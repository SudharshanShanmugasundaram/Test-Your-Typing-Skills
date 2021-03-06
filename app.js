//content to be typed
const source = document.querySelector("#source #source-content").textContent;

//typing space
const input = document.querySelector("#typing-area input[type = 'text']");

//required variables
var stop = false;
var timeTaken = 0;
var permission;

//calculating time taken - Start time function
function start() {
    window.setInterval(function () {timeTaken++;},1000);
}

//evaluation function
input.addEventListener('keydown', function (e) {

    if (e.key != "Shift") {

        var typed_text = e.target.value;
        len = typed_text.length;
        permission=1;
        console.log(len);
        
        //timer starts when user starts typing and background color changes
        if (!timeTaken) {
            start();
            input.style.backgroundColor = "#00FF00";
        }  
        
        //If backspace pressed permission to type granted
        if(e.key=="Backspace"){
            stop=false;
            permission=0;
            input.style.backgroundColor = "#00FF00";
        }
        
        //if typed incorrectly character keys cannot be typed
        if(stop==true){
            e.preventDefault();
        }
        
        //if entered value doesn't match (evaluation)
        if(e.key != source[len] && permission ==1){
            stop=true;
            input.style.backgroundColor = "#FF0000";
        }
        
        //finally checking the completion       
        if(len==source.length-1 && e.key == source[source.length-1]){
           alert("Your typing speed is " + timeTaken + " seconds"); 
        }
        
    }
});

//Refresh page content when try_again pressed
const again = document.querySelector("#button input[type='button']");
again.addEventListener('click', function () {
    window.location.reload();
})
