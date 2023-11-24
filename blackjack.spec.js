describe('Test for the blackjack game', () => {
    it('Tests who won', () => {
        const playerScore1 = 20;
        const dealerScore1 = 18;
        
        const playerScore2 = 18;
        const dealerScore2 = 20;
        
        const playerScore3 = 20;
        const dealerScore3 = 20;
        
        expect(determineWinner(playerScore1, dealerScore1)).toEqual(`Your total of ${playerScore1} beat the dealer's total of ${dealerScore1}.  You win!`);
        expect(determineWinner(playerScore2, dealerScore2)).toEqual(`The dealer's total of ${dealerScore2} beat your total of ${playerScore2}.  You lose!`);
        expect(determineWinner(playerScore3, dealerScore3)).toEqual(`The dealer's total of ${dealerScore3} equaled your total of ${playerScore3}.  Tie!`);
    })
})

describe('Test for the blackjack game', () => {
    it('Tests who won', () => {
        expect(getDeck().length).toEqual(52);
    })
})


describe('Test for the blackjack game', () => {
    it('Tests who won', () => {
        const dealerScore = 15;

        const handScore = dealerShouldDraw(dealerScore);

        expect(handScore).toEqual(true);
    })
})




describe('Test for the blackjack game', () => {
    it('Tests who won', () => {
        const hand = [
            { displayVal: "six", val:6, suit: "diamonds"},
            { displayVal: "seven", val:7, suit: "spades"},
        ];

        const score = calcPoints(hand);

        expect(score.total).toEqual(13);
        expect(score.isSoft).toEqual(false);
    })
})