describe("Test the Black Jack functions",()=>{
    describe("test calcPoints",()=>{
        it("should return total handscore",()=>{
            const hand = [
                {displayVal: "4",suit: "spades",val: 4}
                ,{val: 10, displayVal: '10', suit: 'spades'}
                ,{val: 10, displayVal: 'Queen', suit: 'clubs'}]
            const result = calcPoints(hand)
            expect(typeof result.total).toEqual("number");
            expect(typeof result.isSoft).toEqual("boolean");
        })
    })

    describe("test dealerShouldDraw function",()=>{
        it("should return boolean value",()=>{
            const hand = [
                {displayVal: "4",suit: "spades",val: 4}
                ,{val: 10, displayVal: '10', suit: 'spades'}
                ,{val: 10, displayVal: 'Queen', suit: 'clubs'}];
                const result =  dealerShouldDraw(hand);
                expect(typeof result).toEqual("boolean");
        })
    })

    describe("test determineWinner function", ()=>{
        it("should return string",()=>{
            const result = determineWinner(7,15);
            expect(typeof result).toEqual("string");
        })
    })

    describe("test getDeck function", ()=>{
        it("should return array of 52 objects",()=>{
            const result = getDeck();
         
            expect(result.length).toEqual(52)

        })
    })
})