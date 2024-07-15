let time=document.querySelector("#timer");
function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let dateString = now.toLocaleDateString();
    time.innerHTML = `${dateString}, ${timeString}`;
}

setInterval(updateTime, 1000);
