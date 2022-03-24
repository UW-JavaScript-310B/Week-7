describe("test the soccer program", ()=>{
    describe("test getTotalPoints", ()=>{
        it("should return a number", ()=>{
            const result = getTotalPoints('w');

            expect(typeof result).toEqual('number')
        });

        it("should return 9 for 3 wins", ()=>{
            const result = getTotalPoints('www');

            expect(result).toEqual(9)
        });
    });
    describe("tests for orderTeams", ()=>{
        const teamsArray = [
            { name: 'Sounders', results: 'wwdl' },
            { name: 'Galaxy', result: 'wlld' }
        ];
        it("should return a string", ()=>{
            const result = orderTeams(); 

            expect(typeof result).toEqual('string');
        });
    });
});