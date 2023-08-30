// script.js

let light = true;
let clockType = "clockwise";
function changeTheme(event) {
    const clockImage = document.getElementById('clockImg');
    const body = document.querySelector('body');

    if (light){
        clockImage.style.backgroundImage = "url(nonconfromclock_back1.png)"; 
        body.style.backgroundColor = "#0f0f0f";
        light = false;
        clockType = "anticlockwise";
    }
    else {
        clockImage.style.backgroundImage = "url(nonconfromclock.png)";
        body.style.backgroundColor = "#f0f0f0";
        light = true;
        clockType = "clockwise";
    };
}



function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
    const centerBud = document.getElementById('centerBud');
    
    let hourAngle;
    let minuteAngle;
    let secondAngle;

    // Calculate rotation angles
    if (clockType == "clockwise"){
        hourAngle = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour
        minuteAngle = minutes * 6; // 6 degrees per minute
        secondAngle = seconds * 6; // 6 degrees per second
    }
    else if (clockType == "anticlockwise"){
        hourAngle = -((hours % 12) * 30 + minutes * 0.5); // 30 degrees per hour
        minuteAngle = minutes * -6; // 6 degrees per minute
        secondAngle = seconds * -6; // 6 degrees per second
    }


    if (secondAngle == 42 * 6){
        secondHand.style.backgroundColor = "green";
        centerBud.style.backgroundColor = "green";
    }
    else{
        secondHand.style.backgroundColor = "red";
        centerBud.style.backgroundColor = "red";
    }

    // Apply rotations
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}


function turnButtonAssign(){
    const turnButton = document.querySelector('button')
    turnButton.addEventListener('click', changeTheme);
}


// Initial call to update the clock
updateClock();

turnButtonAssign();
// Update the clock every second
setInterval(updateClock, 10);

