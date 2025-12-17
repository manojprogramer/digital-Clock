let time = function() {
let date = new Date()
let hours = String(date.getHours())
let minutes = String(date.getMinutes()).padStart(2,"0")
let seconds = String(date.getSeconds()).padStart(2,"0")
if(hours >= 12) hours -= 12;
if(hours == 0) hours = 12;
hours = String(hours).padStart(2,"0")

document.querySelector(".hours").innerText = hours+" : "
 document.querySelector(".minutes").innerText = minutes+" : "
document.querySelector(".seconds").innerText = seconds

}
setInterval(time,1000)