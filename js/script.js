const btns = document.querySelectorAll("button");
const btn = document.querySelector("btns");
const screen = document.querySelector(".screen");

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
   
    let target = event.target;

    let num;
    let num2;

    let div_screen = document.createElement('div');
    screen.append(div_screen);

    
    if(target.innerHTML == '1') {
      num = 1;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '2') {
      num = 2;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '3') {
      num = 3;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '4') {
      num = 4;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '5') {
      num = 5;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '6') {
      num = 6;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '7') {
      num = 7;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '8') {
      num = 8;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '9') {
      num = 9;
      div_screen.append(num)
      console.log(num)
    } else if(target.innerHTML == '0') {
      num = 0;
      div_screen.append(num)
      console.log(num)
    }
 
    
    


  });
});
