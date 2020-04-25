
const InputEl = document.querySelector("#validation-input");
const CheckedValue = InputEl.getAttribute("data-length");

InputEl.style.border = "3px solid #bdbdbd";
InputEl.addEventListener("blur", InputSmbCheck);

function InputSmbCheck(e) {
  const InputSmb = e.target.value.length;

  if (InputSmb != CheckedValue ) {
    return (e.target.style.borderColor = "#f44336");
  } else {
    return (e.target.style.borderColor = "#4caf50");
  }
}
