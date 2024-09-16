// time clock

const secondshandEl =  document.getElementById('secondshand');
const minuteshandEl = document.getElementById('minuteshand');
const hourshandEl = document.getElementById('hourshand');
const dateIconEl = document.getElementById('dateIcon');
const digitalClock = document.getElementById('digitalClock');

timefunction()
 

function timefunction() {
    let id = setInterval(() => {
        const date = new Date();
        const hours = date.getHours(); 
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const todaydate = date.getDate();
        
        const hourAngle = (hours / 12) * 360;
        const minutesAngle = (minutes / 60) * 360;
        const secondsAngle = (seconds / 60) * 360;
         
        // clock rotation
        secondshandEl.style.transform = `rotate(${secondsAngle}deg)`;
        minuteshandEl.style.transform = `rotate(${minutesAngle}deg)`;
        hourshandEl.style.transform = `rotate(${hourAngle}deg)`; 
        
        // date and digital time
        dateIconEl.textContent = todaydate
        // converting 12 hours format 
        const  changeHoursformat = hours % 12 || 12;
        const changeMinutesformat = minutes    
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        digitalClock.textContent = `${changeHoursformat}:${changeMinutesformat.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    }, 1000);
}

































