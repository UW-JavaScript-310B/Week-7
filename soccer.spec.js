describe("test soccer.js" , () => {

        describe ("test getTotalPoints Method", () =>{

            it("should return number", () => {
                const result = getTotalPoints('w')

                expect(typeof result).toEqual('number')
            })

            it("should return 6 for 2 wins", () => {
                const result = getTotalPoints('ww')

                expect(result).toEqual(6)
            })


        })

        describe ("test orderTeams Method", () =>{
            const teamsArray = [
                {name: 'Sounders', results: 'wwlwdd'}
            ];

            it("should return a string", ()=>{
                const result = orderTeams(teamsArray);

                expect(result).toEqual("Sounders: 7");
            })
        }

)});