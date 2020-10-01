function btnClick(val){
  document.getElementById("display").value += val;
}

function calculate(){
var expression = document.getElementById("display").value;
var result = eval(expression);
document.getElementById("display").value = result;
}

function clr(){
    document.getElementById("display").value = null;
}
