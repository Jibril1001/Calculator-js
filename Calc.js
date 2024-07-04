const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const exchangeRates = {
    USD: {
      USD: 1,
      BTC: 0.000021,
      ETB: 53.22,
    },
    BTC: {
      USD: 47619.00,
      BTC: 1,
      ETB: 2539234.23, 
    },
    ETB: {
      USD: 0.0188,
      BTC: 0.00000004, 
      ETB: 1,
    }
  };
  
  function askQuestion(question) {
    return new Promise((resolve) => readline.question(question, (answer) => resolve(answer)));
  }
  
  async function main() {
    const choice = await askQuestion("Do you want to perform calculations (C) or currency conversion (X)? ");
  
    if (choice.toUpperCase() === 'C') {
      const num1 = await askQuestion("Enter the first number: ");
      const operator = await askQuestion("Enter the operator (+, -, *, /): ");
      const num2 = await askQuestion("Enter the second number: ");
  
      let result;
  
      try {
        const firstNumber = parseFloat(num1);
        const secondNumber = parseFloat(num2);
  
        switch (operator) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "-":
            result = firstNumber - secondNumber;
            break;
          case "*":
            result = firstNumber * secondNumber;
            break;
          case "/":
            if (secondNumber === 0) {
              throw new Error("Division by zero is not allowed");
            }
            result = firstNumber / secondNumber;
            break;
          default:
            throw new Error("Invalid operator");
        }
  
        console.log(`The result is: ${result}`);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        readline.close();
      }
    } else if (choice.toUpperCase() === 'X') {
      const fromCurrency = await askQuestion("Enter the currency you are converting from (USD, BTC, ETB): ");
      const toCurrency = await askQuestion("Enter the currency you are converting to (USD, BTC, ETB): ");
      const amount = await askQuestion("Enter the amount to convert: ");
  
      if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        console.error("Invalid currency code");
        return;
      }
  
      const conversionRate = exchangeRates[fromCurrency][toCurrency];
      const convertedAmount = amount * conversionRate;
  
      console.log(`The converted amount is: ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
      console.error("Invalid choice. Please enter C or X");
    }
  }
  
  main();
  
  
  