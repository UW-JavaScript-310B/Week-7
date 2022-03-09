describe("Test the Soccer program", () => {
    describe("Test getTotalPoints", () => {
        it("should return a number", () => {
            const result = getTotalPoints("wwdlw"); 

            expect(typeof result).toEqual('number');
        })

        it("should return 6 for 2 wins", () => {
            const result = getTotalPoints("ww"); 

            expect(result).toEqual(6);
        })
    })

    describe("Test for orderTeams", () => {
        const teamArray = [
            {name: "Sounders", results: "wwdl"},
            {name: "Galaxy", results: "wlld"},
        ];
        
        it("Should return a string", () => {
            const result = orderTeams(teamArray);
            expect(result).toEqual();
        })
    })
})