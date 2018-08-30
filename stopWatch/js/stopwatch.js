var hour = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds"),
  miliseconds = document.getElementById("miliseconds"),

  startButton = document.getElementById("startButton"),
  pauseButton = document.getElementById("pauseButton"),
  stopButton  = document.getElementById("stopButton"),
  resetButton = document.getElementById("resetButton"),

  	setTime,
  	currentTime,
  	difference,
  	timer = 0,
  	interval;

  var start = function(){
  	setTime = Date.now();
  	interval = setInterval(update, 100);
  };

  var pause = function(){
  	clearInterval(interval);
  };

  var stop = function(){
  	clearInterval(interval);
  	timer = 0;
  };
  var reset = function(){
  	timer = 0;
  	updateScreen();
  };

  var update = function(){
  	currentTime = Date.now();
  	difference = currentTime-setTime;
  	timer += difference;

  	updateScreen();
  	setTime = currentTime;
  }

  updateScreen = function(){
  	var timeRaw = timer/1000;
  		timeMilisec = parseInt((timeRaw % 1) * 100);
  		timeSec = Math.floor(timeRaw);
  		timeMin = Math.floor(timeSec/60);
  		timeHour = Math.floor(timeMin/60);
  	


  	miliseconds.innerHTML = twoDigits(timeMilisec);
  	seconds.innerHTML = twoDigits(processSixty(timeSec));
  	minutes.innerHTML = twoDigits(processSixty(timeMin));
  	hour.innerHTML = twoDigits(timeHour);
  };

 var twoDigits = function(number){
 	var numString = number.toString();
 	if(numString.length < 2){
 		return "0" + numString;
 	}
 	else{
 		return numString;
 	}
 };

	var processSixty = function(number){
	var divisible = Math.floor(number/60);
	if (number/60 >= divisible){
		return number - 60 * divisible;
	}
}


  startButton.addEventListener('click', start);
  pauseButton.addEventListener('click', pause);
  stopButton .addEventListener('click', stop);
  resetButton.addEventListener('click', reset);