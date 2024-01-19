// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
];

// Add your functions below:
const validateCred = (arr) => {
    // Clone the array to avoid mutating the original
    const clonedArr = arr.slice();

    // Iterate from the rightmost digit (check digit) to the left
    for (let i = clonedArr.length - 2; i >= 0; i -= 2) {
        // Double every other digit
        clonedArr[i] *= 2;

        // If the doubled value is greater than 9, subtract 9
        if (clonedArr[i] > 9) {
            clonedArr[i] -= 9;
        }
    }

    // Sum up all the digits in the credit card number
    const sum = clonedArr.reduce((acc, curr) => acc + curr, 0);

    // Check if the sum modulo 10 is 0
    return sum % 10 === 0;
};

// Test the function with examples
console.log(validateCred(valid1)); // true
console.log(validateCred(invalid1)); // false
console.log(validateCred(mystery1)); // (can be either true or false, depending on the actual card number)
const findInvalidCards = (nestedArray) => {
    const invalidCards = [];

    // Iterate through each array in the nested array
    for (const card of nestedArray) {
        // Check if the current card is invalid using the validateCred function
        if (!validateCred(card)) {
            invalidCards.push(card);
        }
    }

    return invalidCards;
};

// Test the function with the batch array
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);

const idInvalidCardCompanies = (invalidCards) => {
    const invalidCompanies = [];

    // Iterate through each invalid card
    for (const card of invalidCards) {
        // Identify the company based on the first digit
        let company;
        switch (card[0]) {
            case 3:
                company = "Amex (American Express)";
                break;
            case 4:
                company = "Visa";
                break;
            case 5:
                company = "Mastercard";
                break;
            case 6:
                company = "Discover";
                break;
            default:
                company = "Company not found";
        }

        // Add the company to the invalidCompanies array if it's not already there
        if (!invalidCompanies.includes(company)) {
            invalidCompanies.push(company);
        }
    }

    return invalidCompanies;
};

// Test the function with the invalidCards array
const invalidCompanies = idInvalidCardCompanies(invalidCards);

// Function to convert a string of digits into an array of numbers
const stringToDigitsArray = (str) => {
    return str.split('').map(Number);
};

// Function to convert invalid numbers into valid numbers
const convertToValidCard = (invalidCard) => {
    // Replace the last digit with a valid check digit
    invalidCard[invalidCard.length - 1] = 0;
    return invalidCard;
};

// Example usage
const invalidCardString = '45320151128336';
const invalidCardArray = stringToDigitsArray(invalidCardString);
console.log('Invalid Card:', invalidCardArray);

const validCardArray = convertToValidCard(invalidCardArray);
console.log('Valid Card:', validCardArray);

