const InputEl = document.querySelector("#font-size-control");

InputEl.setAttribute("max", 50);
InputEl.setAttribute("value", 25);
let InputStartValue = InputEl.value;

const SpanEl = document.querySelector("#text");
let SpanTextSize = SpanEl.style.fontSize = "36px";

InputEl.addEventListener("input", SpanTextChg);

function SpanTextChg(e) {
    
  let InputSmb = Number(e.target.value)-Number(InputStartValue);
  let st = parseInt(SpanEl.style.fontSize, 10) + InputSmb;
  InputStartValue = e.target.value;
  let NewTextSize = st + "px";
  
  
  SpanEl.style.fontSize = NewTextSize;
  
}
