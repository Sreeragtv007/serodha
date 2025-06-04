const form = document.getElementById("sipForm");
const inputs = form.querySelectorAll("input");

function calculateSIP() {
  const monthly = parseFloat(document.getElementById("monthly").value);
  const years = parseFloat(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value);

  // Validate all inputs are filled and positive
  if (isNaN(monthly) || isNaN(years) || isNaN(rate) || monthly <= 0 || years <= 0 || rate <= 0) {
    document.getElementById("result").classList.add("hidden");
    return;
  }

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const invested = monthly * months;
  const returns = futureValue - invested;

  document.getElementById("invested").textContent = invested.toFixed(2);
  document.getElementById("returns").textContent = returns.toFixed(2);
  document.getElementById("total").textContent = futureValue.toFixed(2);

  document.getElementById("result").classList.remove("hidden");
}

// Add input event listeners to all fields
inputs.forEach(input => {
  input.addEventListener("input", calculateSIP);
});
