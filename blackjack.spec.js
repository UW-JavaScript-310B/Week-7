describe("Tests for Black Jack", () => {
  describe("Tests for No aces", () => {
    const playerHand = [
      { val: 5, displayVal: "5", suit: "hearts" },
      { val: 10, displayVal: "jack", suit: "hearts" },
    ];

    it("Should return total=15 and isSoft=false with hand w/o Aces", () => {
      const response = calcPoints(playerHand);
      expect(response).toEqual({ total: 15, isSoft: false });
    });
  });
  describe("Tests for 1 ace case (soft)", () => {
    const playerHand = [
      { val: 11, displayVal: "ace", suit: "diamonds" },
      { val: 10, displayVal: "jack", suit: "hearts" },
    ];

    it("Should return total: 21, isSoft: false with hand w/one Ace", () => {
      const response = calcPoints(playerHand);
      expect(response).toEqual({ total: 21, isSoft: true });
    });

    const playerHand = [
      { val: 11, displayVal: "ace", suit: "diamonds" },
      { val: 5, displayVal: "five", suit: "hearts" },
      { val: 3, displayVal: "three", suit: "spades" },
    ];

    it("Should return total: 18, isSoft: false with hand w/one Ace", () => {
      const response = calcPoints(playerHand);
      expect(response).toEqual({ total: 21, isSoft: true });
    });
  });
  describe("Tests for 1 ace case (not soft)", () => {
    const noAceHand2 = [
      { val: 2, displayVal: "two", suit: "diamonds" },
      { val: 10, displayVal: "jack", suit: "hearts" },
    ];
  });
  describe("Tests for multiple ace case (soft)", () => {
    const noAceHand2 = [
      { val: 2, displayVal: "two", suit: "diamonds" },
      { val: 10, displayVal: "jack", suit: "hearts" },
    ];
  });
  describe("Tests for multiple ace case (not soft)", () => {
    const noAceHand2 = [
      { val: 2, displayVal: "two", suit: "diamonds" },
      { val: 10, displayVal: "jack", suit: "hearts" },
    ];
  });
});

//Object({ total: 15, isSoft: false })
//expect(bigObject).toEqual({"foo": ['bar', 'baz']});

/*
2. Blackjack Game
In-class Card Deck exercise should be completed before starting this.

Description & Rules: Blackjack (Links to an external site.) is a card game that where a player goes against the dealer. The object in each round is to get as close to a score of 21 as possible, without going over 21.  A typical round works as follows (simplified a bit):

Both the player and the dealer are dealt 2 cards.  One of the dealers cards is face-up, visible to all.  The other is face down, not known to anyone except the dealer.
The player goes first.  The player adds up the values of her two cards, which are valued as follows:
All face cards (Jack, Queen, King) are worth 10 each
All numbered cards (2 to 10) are worth their number (2 is worth 2, 3 is worth 3, etc.)
Aces can be worth either 1 OR 11, at the choice of the player.  Since you want to be as close to 21 as possible, an Ace will be counted as 11 unless it would put the player (or dealer) over 21, in which case it is counted as 1.  A decision can be made for each Ace individually (if a player has two Aces, they can count one as 11 points and the other as 1 point if they choose)
Depending on the value of the player's two cards, they can choose to end their turn (stand) or draw another card to try to get closer to 21
The player can continue to draw as many cards as she likes, until either
She goes over 21, in which case she loses the round, and the dealer does not need to have a turn
She decides to end her turn (stand)
Once the player has decided to end her hand, the dealer's turn begins.  The dealer starts by flipping over their face down card, so that it is revealed to all.
The dealer must abide by a strict set of rules:
If the dealer's hand is 16 points or less, the dealer must draw another card
If the dealer's hand is exactly 17 points, and the dealer has an Ace valued at 11, the dealer must draw another card
Otherwise if the dealer's hand is 17 points or more, the dealer will end her turn
If at any time the dealer's point total goes over 21, the dealer will lose the round immediately and the player will win
If both the player and the dealer have ended their turns without going over 21, they will compare the points of their two hands.  Whoever's point total is greater will win the round.  If both point totals are equal, they will tie the round (push)
 

You are given a blackjackDeck, which uses getDeck() from the in-class exercise.
This is an array of cards, each card will have these three properties:

val - number - value of card
displayVal - string - initially equal to an empty array
suit - string - one of these 4 values: 'hearts', 'spades', 'clubs', or 'diamonds'
1. Create a class CardPlayer, with a constructor that accepts one argument:
name - string - name of player (or dealer)
When new CardPlayer is called (with a name argument), it should return an object with the following properties and method:

name - string - equal to name passed in
hand - array - initially equal to an empty array
drawCard - function with no arguments - selects a card at random from the deck, and adds to hand array.  This does not need to remove the card from the deck (so theoretically a player could draw the same card multiple times - that's okay for this scenario).
2. Create two new CardPlayer instances as variables. 
Name the first one 'Player'
Name the second one 'Dealer'
3. Write a function calcPoints, that accepts one argument:
hand - Array - Array of card objects with properties val, displayVal, and suit
This function will calculate the total number of points the hand is worth, and determine if the hand isSoft. 

CALCULATING THE TOTAL, every card will be worth its val, EXCEPT each Ace card can be treated as either 1 or 11. 

By default, an Ace should be treated as being worth 11 for purposes of calculating the total
If the sum of the val of all the cards in the hand would exceed 21, if an Ace were valued as 11, then the Ace should be valued at 1
Hint: If there are  multiple Aces in a hand, you can immediately assume that all but one will have a val of 1 (if two aces were both valued at 11, it would immediately put the player over 21).  So you only need to make the decision for 1 Ace
This function should return an object with the following properties:

total - number - the point value of the hand
isSoft - boolean - true if there is an Ace in the hand that is being counted as 11 points.  false if the hand has no Aces, or if all Aces are counting as 1 point
4. Write a function dealerShouldDraw, that accepts one argument:
dealerHand - Array - Array of card objects with properties val, displayVal, and suit
This function should determine whether the dealer should draw another card or not (see rules above).

Returns a boolean (true or false).  True means the dealer should draw another card, false means the dealer should end their turn.

Hint: Use the calculateScore function to determine the dealer's total points.  Use the isSoft property passed back from that function to determine if the dealer has an Ace that is being counted as 11

5. Write a function determineWinner, that accepts two arguments:
playerScore - number - player's calculated total number of points
dealerScore - number - dealer's calculated total number of points
This function should determine the winner (or if there is a tie), based on the dealer's points and the player's points.

Returns a string that shows the player's score, the dealer's score, and who wins (or if it is a tie).


*/
