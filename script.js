function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}