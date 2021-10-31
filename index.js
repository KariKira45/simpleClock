showTime = () =>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    let session = 'AM';

    if (h == 0){
        h = 12;
    }
    if (h > 12){
        h = h - 12;
        session = 'PM';
    }

    h = (h < 10) ? "0"+h : h;
    m = (m < 10) ? "0"+m : m;
    s = (s < 10) ? "0"+s : s;
    ms = (ms < 10) ? "0"+ms :ms;

    var time = h + ":" + m + ":" + s + ":" + ms +" " + session;
    document.getElementById("simpleClockDisplay").innerText = time;
    document.getElementById("simpleClockDisplay").textContent = time;
    
    setTimeout(showTime, 100);
}

showTime();