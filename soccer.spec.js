describe("Test the Soccer Program", () => {
    describe("Test getTotalPoints", () => {
        it("should return a number", () => {
            const result = getTotalPoints('w');
            expect(typeof result).toEqual('number');
        })
        it("should return 6 for 2 wins", () => {
            const result = getTotalPoints('ww');
            expect(result).toEqual(6);
        })
    })
    describe("Test for orderTeams", () => {
        const teamsArray = [
            {name: 'Sounders', results: 'wwdl'},
            {name: 'Galaxy', results: 'wlld'},
        ];
        it("should return a sting", () => {
            const results  = orderTeams(teamsArray)
            expect(result).toEqual()
        })
    })
})