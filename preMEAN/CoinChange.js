function coinChange(amount){
  var dollars = 0;
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;

  if (amount >= 100) {
    dollars = Math.floor(amount / 100);
    amount %= 100;
  }
  if (amount >= 25) {
    quarters = Math.floor(amount / 25);
    amount %= 25;
  }
  if (amount >= 10) {
    dimes = Math.floor(amount / 10);
    amount %= 10;
  }
  if (amount >= 5) {
    nickels = Math.floor(amount / 5);
    amount %= 5;
  }
  pennies = amount
  return {
    dollars: dollars,
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
  }
}

console.log(coinChange(482))
