var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var name = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var cardNum = 0;

// Card Class
class Card {
  constructor(suit, name, value){
    this.suit = suit;
    this.name = name;
    this.value = value;
  }
  show(){
    console.log(`${this.name} of ${this.suit}. Value: ${this.value}`);
  }
}

// Create Deck
function getDeck(){
  var deck = [];

  for(var i = 0; i < suits.length; i ++){
    for(var j = 0; j < name.length; j ++){
      var card = {
        suit: suits[i],
        name: name[j],
        value: value[j]
      }
      deck.push(card)
    }
  }
  return deck;
}

// Deck Class
class Deck {
  constructor() {
    this.deck = getDeck();
  }

  reset() {
    this.deck = getDeck();
    return this;
  }

  shuffle() {
    var numCards = this.deck.length, rand, shuffle;
    while (numCards) {
      rand = Math.floor(Math.random() * numCards--);
      shuffle= this.deck[numCards];
      this.deck[numCards] = this.deck[rand];
      this.deck[rand] = shuffle;
    }
    return this;
  }

  deal() {
    var pop = this.deck.pop()
    return pop;
  }
}

// Player Class
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  dealt(deck, num) {
    for(var i = 0; i < num; i ++){
      this.hand.push(deck.deal());
    }
    return this;
  }

  draw(deck) {
    this.hand.push(deck.deal());
    return this;
  }

  discard() {
    this.hand.pop()
    return this;
  }
}




// Testing Arena

console.log('New Deck');
var deck1 = new Deck();
console.log(deck1);

console.log('New Shuffle');
deck1.shuffle();
console.log(deck1);
console.log(deck1.deck.length);

var player1 = new Player('Kevin', 5);
player1.dealt(deck1, 5);
console.log(player1.hand);

player1.discard();
console.log(player1.hand);

player1.draw(deck1);
console.log(player1.hand);
