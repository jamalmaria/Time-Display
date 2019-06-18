function showClock(){
    var btnTime = document.getElementById('btn-time');
    var clockDiv = document.getElementById('clock');
    btnTime.style.display = "none";
    clockDiv.style.paddingTop = "15%";
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setInterval(function(){
        var date = new Date();
        clockDiv.innerHTML = `<h1 class="time">
          ${days[date.getDay()]}<br> ${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()} <br>
         ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}</h1>`;
    },1000);


}