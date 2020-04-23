const inputBox = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");
inputBox.addEventListener("input", OnInputSpanChange);

function OnInputSpanChange(e) {
  const startValue = spanValue.textContent;
  spanValue.textContent = e.target.value;
  if (e.target.value === "") {
    spanValue.textContent = "незнакомец";
  }
}
