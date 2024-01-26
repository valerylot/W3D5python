/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let penny = 1;
    let dict = {}

    if (cents >= quarter){
        const quarterCount = Math.floor(cents/quarter)
        cents -= quarterCount * quarter
        dict["quarter"] = quarterCount
    }
    if (cents >= dime){
        const dimeCount = Math.floor(cents/dime)
        cents -= dimeCount * dime
        dict["dime"] = dimeCount
    }
    if (cents >= nickel){
        const nickelCount = Math.floor(cents/nickel)
        cents -= nickelCount * nickel
        dict["nickel"] = nickelCount
    }
    else (cents >= penny);{
        const pennyCount = Math.floor(cents/penny)
        cents -= pennyCount * penny
        dict["penny"] = pennyCount
    }
    return dict
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))
/*****************************************************************************/