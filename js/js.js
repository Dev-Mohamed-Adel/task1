document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('input').value = '';
  document.getElementById('task').innerHTML = '';
});

document.getElementById('validateButton').addEventListener('click', function() {
  const msg = document.getElementById("task");
  msg.innerHTML = "";

  let value = document.getElementById("input").value;
  try {
    if (value === "") throw "Empty";
    if (isNaN(value)) throw "Not a Number";
    value = Number(value);
    if (value > 5) throw "Above 5";
    if (value < 5) throw "Below 5";
    if (value === 5) throw "Equal 5";
  } catch (err) {
    msg.innerHTML = "The Input " + err;
  }
});
