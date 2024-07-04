Structure:

User Input: askQuestion function retrieves user input for choice (calculation or conversion), numbers, and operator/currencies.
Choice Handling: main function identifies the user's choice (C or X) and executes the corresponding logic (calculator or currency converter).
Calculation: Uses a switch statement to perform addition, subtraction, multiplication, or division based on the operator. Error handling is included for division by zero and invalid operators.
Currency Conversion: Retrieves conversion rate from exchangeRates dictionary and multiplies it by the amount to convert. Error handling checks for invalid currencies.
Output: Prints the calculation result or converted amount with formatting.
Challenges:

Handling potential errors like division by zero and invalid input.
Managing different data types (numbers, currencies).
Solutions:

try...catch block catches errors and provides informative messages.
Input validation checks for valid operators and currency codes.
