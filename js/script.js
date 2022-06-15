const btns = document.querySelectorAll("button");
const btn = document.querySelector("btns");
const screen = document.querySelector(".screen");
const btnEquals = document.querySelector('.equals')

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let target = event.target;

    let num;
    let symbol;
    let equal = "=";
    let result = 0;

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
    } else if (target.matches(".C_C")) {
      symbol = "C";
      screen.innerHTML = "";
    }


    btnEquals.addEventListener('click', function(event) {
    
      function calc(num1, num2, action) {
        switch(action) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
        }
        return result;
      }
      calc();
      div_screen.append(result);
     
    })
  });
});


// let a = '';
// let b = '';
// let sign = '';
// let finish = false;

// const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
// const action = ["-", "+", "*", "/"];

// //Получаем экран
// const out = document.querySelector('.calc-screen p');

// //Функция очистки
// function clearAll () {
//   let a = '';
// let b = '';
// let sign = '';
// let finish = false;
// out.textContent = 0;
// }

// //Очитка поля
// document.querySelector('.ac').onclick = clearAll;

// //Обработка нажатия кнопки Можно через addEventListener
// document.querySelector('.buttons').onclick = (event) => {
//   //Нажата не кнопка
//   if(!event.target.classList.contains('btn')) return;
//   //Нажата кнопка clearAll ac
//   if(event.target.classList.contains('ac')) return;
//   //Если нажата кнопка, очищаем экран
//   out.textContent = '';
// // Получаем нажатую кнопку
// const key = event.target.textContent;

// //Есди нажата кнопка 0-9 или .
// if(digit.includes(key)) {
//   if(b === '' && sign === '') {
//     a += key;
//     out.textContent = a;
//   }
//   else if(a !== '' && b !== '' && finish) {
//     b = key;
//     finish = false;
//     out.textContent = b;
//   }
//   else {
//     b += key;
//     out.textContent = b;
//   }
//   return;
// }

// //Если нажата клавиша +  - / ;
// if (action.includes(key)) {
//   sign = key;
//   out.textContent = sign;
//   console.log(sign);
//   return;
// }

// // Нажато =
// if (key === '=') {
//   if (b === '') b = a;
//   switch(sign) {
//     case '+':
//       a = (+a) + (+b);
//       break;
//     case '-':
//       a = a - b;
//       break;
//     case '*': 
//       a = a * b;
//       break;
//     case '/': 
//     if (b === "0") {
//       out.textContent = 'Ошибка';
//       a = '';
//       b = '';
//       sign = '';
//       return;
//     }
//       a = a / b;
//       break;
//   }
//   finish = true;
//   out.textContent = a;
// }
// }
