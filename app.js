function sum(a, b) {
  return a + b;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const sumButton = document.getElementById("sumButton");
    const resultElement = document.getElementById("result");

    sumButton.addEventListener("click", () => {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);

      if (!isNaN(num1) && !isNaN(num2)) {
        const result = sum(num1, num2);
        resultElement.textContent = `${num1} + ${num2} = ${result}`;
      } else {
        resultElement.textContent = "Please enter valid numbers";
      }
    });
  });
}

// Exportando a função para testes
if (typeof module !== "undefined" && module.exports) {
  module.exports = sum;
}
