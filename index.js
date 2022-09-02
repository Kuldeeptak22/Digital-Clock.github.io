//  Select All Elements which is not static.
const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");
let textMessage = document.getElementById("textMessage");

// Create a Function :-
let updateClock = () => {
  // We use Date method of javascript for live time.
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();
  let ampm = "AM"; // Set this value default

  // Now we use a condition to create ampm dynamic with the time:-
  if (H > 12) {
    H = H - 12;
    ampm = "PM";
  }

  // Conditional Statement (Ternary Operator) for double Digits:-
  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;

  // To change inner text of selected element:-
  hourElement.innerText = H;
  minutesElement.innerText = M;
  secondsElement.innerText = S;
  ampmElement.innerText = ampm;

  // Now we delever text messages through else-if statement:-
  if (H >= 5 && H < 8 && ampm == "AM") {
    textMessage.innerText = "Wake Up Bro, It's Good Morning";
  } else if (H >= 8 && H < 9 && ampm == "AM") {
    textMessage.innerText = "It's Excersise Time, Boost your Stamina..!";
  } else if (H >= 9 && H < 10 && ampm == "AM") {
    textMessage.innerText = "Go Get ready for office..!";
  } else if (H >= 10 && H < 12 && ampm == "AM") {
    textMessage.innerText = "Complate your goals..!";
  } else if (H >= 12 && H < 1 && ampm == "PM") {
    textMessage.innerText = "Execute your Code..! ";
  } else if (H >= 1 && H < 2 && ampm == "PM") {
    textMessage.innerText = "It's lunch time, Take fresh food..!";
  } else if (H >= 2 && H < 4 && ampm == "PM") {
    textMessage.innerText = "Complate your goals..!";
  } else if (H >= 4 && H < 5 && ampm == "PM") {
    textMessage.innerText = "Take a break, Talk with team..!";
  } else if (H >= 5 && H < 7 && ampm == "PM") {
    textMessage.innerText = "Set-up Your next Day goals";
  } else if (H >= 7 && H < 8 && ampm == "PM") {
    textMessage.innerText = "Let's Go for home..!";
  } else if (H >= 8 && H < 9 && ampm == "PM") {
    textMessage.innerText = "It's Dinner time...!";
  } else if (H >= 9 && H < 10 && ampm == "PM") {
    textMessage.innerText = "Go for evening walk...!";
  } else if (H >= 10 && H < 11 && ampm == "PM") {
    textMessage.innerText = "Read your book...!";
  } else if (H >= 11 && H < 12 && ampm == "PM") {
    textMessage.innerText = "Time to sleep, sweet dreams...!";
  } else {
    textMessage.innerText = "Good night buddy..!";
  }

  // if (H >= 1 && H < 2 && ampm == "PM") {
  //   textMessage.innerText = "Time to sleep, sweet...!";
  // } else {
  //   textMessage.innerText = "Jai ho...!";
  // }

  // This is setTimeout function, to run/update our digital clock in every second.(Basically this function refresh our clock)
  setTimeout(() => {
    updateClock();
  }, 1000);
};
updateClock();
