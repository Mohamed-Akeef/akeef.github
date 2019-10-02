  var customername = "Akeef";
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 16) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
 
  document.getElementById("day").innerHTML = greeting;
  document.getElementById("customer-name").innerHTML= customername;
  



      function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h >= 12){
          h = h - 12;
          session = "PM";
        }

        if(h == 0){
          h = 12;
        }


        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("time").innerText = time;

        setTimeout(showTime, 1000);
      }

      showTime();

    
