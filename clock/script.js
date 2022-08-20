function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
      new Date().getMinutes() * 60 +
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
}, 1000);


var secondHand = document.querySelector('.second-hand');
  var minsHand = document.querySelector('.min-hand');
  var hourHand = document.querySelector('.hour');

  function setDate() {
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var mins = now.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    if(secondsDegrees >= 360){
      secondHand.style.transition='none';
    }
  }

  setInterval(setDate, 1000);

  setDate();