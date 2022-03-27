const btns = document.querySelectorAll("button");
const btn = document.querySelector("btns");
const screen = document.querySelector(".screen");

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let target = event.target;

    let num;
    let symbol;
    let result;

    let div_screen = document.createElement("div");
    screen.append(div_screen);

    if (target.innerHTML == "1") {
      num = 1;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "2") {
      num = 2;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "3") {
      num = 3;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "4") {
      num = 4;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "5") {
      num = 5;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "6") {
      num = 6;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "7") {
      num = 7;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "8") {
      num = 8;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "9") {
      num = 9;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == "0") {
      num = 0;
      div_screen.append(num);
      console.log(num);
    } else if (target.innerHTML == ".") {
      num = ".";
      div_screen.append(num);
      console.log(num);
    }

    if (target.matches(".plus-minus")) {
      symbol = "+/-";
      div_screen.append(symbol);
    } else if (target.matches(".arrow")) {
      symbol = "<=";
      div_screen.append(symbol);
    } else if (target.matches(".mult")) {
      symbol = "*";
      div_screen.append(symbol);
    } else if (target.matches(".divide")) {
      symbol = "/";
      div_screen.append(symbol);
    } else if (target.matches(".minus")) {
      symbol = "-";
      div_screen.append(symbol);
    } else if (target.matches(".plus")) {
      symbol = "+";
      div_screen.append(symbol);
    } else if (target.matches(".equality")) {
      
      function calc(num1, num2, action) {
        if (action == "+") {
          result = `${num1 + num2}`;
        } else if (action == "-") {
          result = `${num1 - num2}`;
        } else if (action == "*") {
          result = `${num1 * num2}`;
        } else if (action == "/") {
          result = `${num1 / num2}`;
        }
        return result;
      }
      console.log(calc(num, num, symbol));
      div_screen.append(result);
    } else if (target.matches(".C_C")) {
      symbol = "C";
      screen.innerHTML = "";
    }
  });
});
