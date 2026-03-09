let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

         function clearDisplay(){
     display.value = "";
     }
function deleteLast(){
display.value = display.value.slice(0,-1);
}



let errorSound = new Audio("fahhh_KcgAXfs.mp3");

function calculate(){
    try{
        let result = eval(display.value);
        if(result === Infinity || isNaN(result)){
            throw new Error("Math Error");
        }
        display.value = result;
    }
    catch(error){
        display.value = "Syntax Error";
        errorSound.play();
    }
}
function toggleLamp() {
  isOn = !isOn;
  clickSound.play();

  body.setAttribute("data-on", isOn);
  root.style.setProperty("--on", isOn ? "1" : "0");

  if (isOn) {
    calculate.classList.add("active");
    gsap.to(body,{backgroundColor: "#ffffff", duration: 0.6})
  } else {
     calculate.classList.remove("active");
    gsap.to(body,{backgroundColor: "#000000", duration: 0.6})

    }
}
