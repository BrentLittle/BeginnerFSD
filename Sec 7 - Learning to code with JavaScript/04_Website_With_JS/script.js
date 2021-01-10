var textField1 = document.getElementById('textField1');
var textField2 = document.getElementById('textField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('XPercentOfY');

form.addEventListener('submit', function(event) {
  if (!textField1.value || !textField2.value) {
    alert("Please enter values in the fields");
  }
  else {
    var result = (parseFloat(textField1.value) / parseFloat(textField2.value)) * 100
    resultField.innerText = "Answer: " + result + "%";
    event.preventDefault();
  }
});
