describe("Test the soccer function", ()=>{
    describe("testing getTotalPoints function",()=>{
        it("should return number value",()=>{
            const result = getTotalPoints('wwl');
            expect(typeof result).toEqual("number");
        })
  
    it("should return 6 for 3 wins",()=>{
        const result = getTotalPoints('ww');
        expect(result).toEqual(6)
    })

})

    // describe("testing orderTeams standingsString function ",()=>{
    //     it("should return string value",()=>{
    //         const team = {name: 'Sounders', results: 'wwlwdd'}
    //         const res = orderTeams(team);
    //         expect(res).toEqual("string");
    //     })
    // })
})