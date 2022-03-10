describe("blackjack game", () =>{
    describe("calcPoints function", () =>{

        const noAceHand =[
            {val: 5, displayVal: "5", suit: "hearts"},
            {val: 10, displayVal: "jack", suit: "hearts"}
        ]

        const oneAceHardHand = [

        ];

    //  – No aces
        it("should return...", () =>{
            const result = calcPoints(noAceHand);

            expect(result.total).toEqual(15);
            expect(result.isSoft).toEqual(false);

        });
    // – 1 ace case (soft)
        it("should return...", () =>{});
    // – 1 ace case (not soft)
        it("should return...", () =>{});
    // – multipe ace case (soft)
        it("should return...", () =>{});
    // – multipe ace case (not soft)
        it("should return...", () =>{});




    })
})