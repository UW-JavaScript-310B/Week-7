
    describe("test getTotalPoints function", ()=>{
        it("should return a number value", ()=>{
            const result = getTotalPoints('w');

            expect(typeof result).toEqual('number')
        });

        it("should return the correct point total (4 points)", ()=>{
            const result = getTotalPoints('wdl');

            expect(result).toEqual(4)
        });
    });
    describe("tests orderTeams function", ()=>{
        const teamsArray = [
            { name: 'Sounders', results: 'wwdl' },
            { name: 'Galaxy', result: 'wlld' }
        ];
        it("should return a string", ()=>{
            const result = orderTeams(); 

            expect(typeof result).toEqual('string');
        });
    });
