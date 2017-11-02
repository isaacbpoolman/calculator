var i, total;


function val(val) {
  document.getElementById("input").value += val;
}

function cl(val) {
  document.getElementById("input").value = val;
}

function add(val) {
  document.getElementById("input").value += val;
}

function sub(val) {
  document.getElementById("input").value += val;
}

function mult(val) {
  document.getElementById("input").value += val;
}

function div(val) {
  document.getElementById("input").value += val;
}

function final(val) {
  total = eval(document.getElementById("input").value);
      document.getElementById("input").value = total;
}
