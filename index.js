function showClock(){
    var btnTime = document.getElementById('btn-time');
    var clockDiv = document.getElementById('clock');
    btnTime.style.display = "none";
    clockDiv.style.paddingTop = "25%";
    setInterval(function(){
        var date = new Date();
        clockDiv.innerHTML = `<h1 class="time"> ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}</h1>`;
    }
    );


}